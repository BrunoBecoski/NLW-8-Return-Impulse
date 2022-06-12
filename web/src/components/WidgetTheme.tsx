import { RadioGroup } from '@headlessui/react';
import { Check } from 'phosphor-react';
import { useState } from 'react';

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
      className={`flex justify-center items-center p-3 border-4 cursor-pointer rounded-full
        ${checked && 'border-brand-500'}
        ${type === 'light' ? 'bg-white' : 'bg-black'}
      `}
    >
      <div 
        className={`flex justify-center items-center h-6 w-6 rounded-full border-2 
          ${checked ? 'bg-brand-500 border-brand-500' : 'border-gray-500'}
        `}
      >
        <Check size={16} weight="bold" className={checked ? 'text-brand-50' : 'text-transparent'} />
      </div>
      <div className="flex flex-1 justify-center">

        <p className={
            checked ? 'text-brand-500 font-bold' :
              type === 'light' ? 'text-black' : 'text-white'
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
      case 'green': return '-[#00856F]';
      case 'orange': return '-[#E8590C]';
      case 'blue': return '-[#1971C2]';
      case 'purple': return '-[#5F3DC4]';
      case 'red': return '-[#C92A2A]';
      case 'pink': return '-[#F91880]';
    }
  })();

  return (
    <div 
      className={`h-14 w-14 flex justify-center items-center rounded-full border-4
        ${ checked && `border${selectedColor}`}
      `}
    >
      <div className={`flex items-center justify-center h-11 w-11 rounded-full bg${selectedColor}`}>
        {
          checked &&
          <Check size={22} weight="bold" className="text-brand-50" />
        }
      </div>
    </div>
  )
}

export function WidgetTheme() {
  const [backgroundTheme, setBackgroundTheme] = useState<BackgroundThemeOptions>('light');
  const [colorTheme, setColorTheme] = useState<ColorThemeOptions>('green');

  return(
    <div className="bg-brand-200 p-4 relative rounded-md mb-4 flex flex-col border-2 border-brand-500 w-[calc(100vw-2rem)] md:w-80">
      <header>
        <span className="text-brand-headline text-xl leading-6">Escolha uma tema</span>
        <CloseButton />
      </header>

      <div>
        <RadioGroup value={backgroundTheme} onChange={setBackgroundTheme}>
          <RadioGroup.Label className="text-brand-headline mb-4">Cor de fundo</RadioGroup.Label>

          <div className="flex flex-col justify-between gap-4 rounded-sm p-2 bg-brand-100">
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
          <RadioGroup.Label className="text-brand-headline mb-4">Cor</RadioGroup.Label>
          
            <div className="flex flex-col justify-between gap-4 rounded-sm p-2 bg-brand-100">
              <div className="flex justify-between">
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

              <div className="flex justify-between">
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