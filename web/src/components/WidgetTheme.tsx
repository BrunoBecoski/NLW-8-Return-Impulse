import { RadioGroup } from '@headlessui/react';
import { Check, Moon, Sun } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { CloseButton } from './common/CloseButton';

type BackgroundThemeOptions = 'light' | 'dark';

type ColorThemeOptions = 'green' | 'orange' | 'blue' | 'purple' | 'red' | 'pink';

interface BackgroundThemeButtonProps {
  type: BackgroundThemeOptions;
  checked: boolean;
}

interface ColorThemeButtonProps {
  type: ColorThemeOptions;
  checked: boolean;
}

function BackgroundThemeButton({ type, checked }: BackgroundThemeButtonProps) {
  return (
    <div 
      className={`flex justify-center items-center p-3 border-2 md:w-44 rounded-full cursor-pointer
        ${checked && 'border-brand-500'}
        ${type === 'light' ? 'bg-white' : 'bg-black'}
      `}
    >
      <div 
        className={`flex justify-center items-center h-6 w-6 rounded-full border-2
          ${checked ? 'bg-brand-500 border-brand-500' : 'border-gray-500'}
        `}
      >
        { type === 'light' 
          ? 
            <Sun size={16} weight="fill" className={checked ? 'text-brand-50' : 'text-transparent'} /> 
          :
            <Moon size={16} weight="fill" className={checked ? 'text-brand-50' : 'text-transparent'} /> 
        }
      </div>
      <div className="flex flex-1 justify-center">

        <p className={
            checked ? 'text-brand-500 font-bold' : 'text-gray-500'
          }
        >
          Tema {type === 'light' ? 'claro' : 'escuro'}
        </p>
      </div>
    </div>
  );
}

function ColorThemeButton({ type, checked }: ColorThemeButtonProps) {

  const selectedColor = (() => {
    switch (type) {
      case 'green': return 'green';
      case 'orange': return 'orange';
      case 'blue': return 'blue';
      case 'purple': return 'purple';
      case 'red': return 'red';
      case 'pink': return 'pink';
    }
  })();

  return (
    <div className={`flex items-center justify-center h-11 w-11 rounded-full bg-${selectedColor} cursor-pointer`}>
      {
        checked &&
        <Check size={22} weight="bold" className="text-brand-50" />
      }
    </div>
)
}

export function WidgetTheme() {
  const [backgroundTheme, setBackgroundTheme] = useState<BackgroundThemeOptions>('light');
  const [colorTheme, setColorTheme] = useState<ColorThemeOptions>('green');

  useEffect(() => {
    if(backgroundTheme === 'light') {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  },[backgroundTheme]);


  return(
    <div className={`bg-${colorTheme} p-4 relative rounded-2xl mb-4 flex flex-col border-8 border-${colorTheme} w-[calc(100vw-2rem)] md:max-w-md`}>
      <header className="mb-4">
        <span className="text-brand-headline text-xl leading-6">Escolha uma tema</span>
        <CloseButton />
      </header>

      <div>
        <RadioGroup className="mb-3" value={backgroundTheme} onChange={setBackgroundTheme}>
          <RadioGroup.Label className="text-brand-paragraph">Cor de fundo</RadioGroup.Label>

          <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 rounded-md mt-2 p-2 bg-brand-100">
            <RadioGroup.Option value="light">
              {({ checked }) => (
                <BackgroundThemeButton 
                  type="light"
                  checked={checked}
                />
              )}
            </RadioGroup.Option>
              
            <RadioGroup.Option value="dark">
              {({ checked }) => (
                <BackgroundThemeButton
                  type="dark"
                  checked={checked}
                />
              )}
            </RadioGroup.Option>
          </div>
        </RadioGroup>

        <RadioGroup value={colorTheme} onChange={setColorTheme}>
          <RadioGroup.Label className="text-brand-paragraph mb-4">Cor</RadioGroup.Label>
          
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 rounded-md mt-2 p-2 bg-brand-100">
              <div className="flex justify-around md:w-1/2">
                <RadioGroup.Option value="green">
                  {({ checked }) => (
                    <ColorThemeButton type="green" checked={checked} />
                  )}
                </RadioGroup.Option>

                <RadioGroup.Option value="orange">
                  {({ checked }) => (
                    <ColorThemeButton type="orange" checked={checked} />
                  )}
                </RadioGroup.Option>

                <RadioGroup.Option value="blue">
                  {({ checked }) => (
                    <ColorThemeButton type="blue" checked={checked} />
                  )}
                </RadioGroup.Option>
              </div>

              <div className="flex justify-around md:w-1/2">
                <RadioGroup.Option value="purple">
                  {({ checked }) => (
                    <ColorThemeButton type="purple" checked={checked} />
                  )}
                </RadioGroup.Option>

                <RadioGroup.Option value="red">
                  {({ checked }) => (
                    <ColorThemeButton type="red" checked={checked} />
                  )}
                </RadioGroup.Option>

                <RadioGroup.Option value="pink">
                  {({ checked }) => (
                    <ColorThemeButton type="pink" checked={checked} />
                  )}
                </RadioGroup.Option>
              </div>
            </div>
        </RadioGroup>

      </div>
    </div>
  );
}