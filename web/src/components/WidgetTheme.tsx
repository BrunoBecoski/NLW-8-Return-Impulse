import { RadioGroup } from '@headlessui/react';
import { Check, Moon, Sun } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { applyTheme } from '../themes/utils';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';
import greenTheme from '../themes/green';
import orangeTheme from '../themes/orange';
import blueTheme from '../themes/blue';
import purpleTheme from '../themes/purple';
import redTheme from '../themes/red';
import pinkTheme from '../themes/pink';

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
        ${type === 'light' ? 'bg-backgroundLight' : 'bg-backgroundDark'}
      `}
    >
      <div 
        className={`flex justify-center items-center h-6 w-6 rounded-full border-2
          ${checked ? 'bg-brand-500 border-brand-500' : 'border-surface-secondary'}
        `}
      >
        { type === 'light' 
          ? 
            <Sun size={16} weight="fill" className={checked ? 'text-onSurface' : 'text-transparent'} /> 
          :
            <Moon size={16} weight="fill" className={checked ? 'text-onSurface' : 'text-transparent'} /> 
        }
      </div>
      <div className="flex flex-1 justify-center">
        <p className={
            checked ? 'text-brand-500 font-bold' : 'text-surface-secondary'
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
      case 'green': return 'bg-green';
      case 'orange': return 'bg-orange';
      case 'blue': return 'bg-blue';
      case 'purple': return 'bg-purple';
      case 'red': return 'bg-red';
      case 'pink': return 'bg-pink';
    }
  })();

  return (
    <div className={`flex items-center justify-center h-11 w-11 rounded-full ${selectedColor} cursor-pointer`}>
      {
        checked &&
        <Check size={22} weight="bold" className="text-onSurface" />
      }
    </div>
  )
}

export function WidgetTheme() {
  const [backgroundTheme, setBackgroundTheme] = useState<BackgroundThemeOptions>('light');
  const [colorTheme, setColorTheme] = useState<ColorThemeOptions>('green');

  useEffect(() => {
    switch (backgroundTheme) {
      case 'light':
        applyTheme(lightTheme);
        break;
      case 'dark':
        applyTheme(darkTheme);
        break;
    }
  },[backgroundTheme]);

  useEffect(() => {
    switch (colorTheme) {
      case 'green':
        applyTheme(greenTheme);
        break;
      case 'orange':
        applyTheme(orangeTheme);
        break;
      case 'blue':
        applyTheme(blueTheme);
        break;
      case 'purple':
        applyTheme(purpleTheme);
        break;
      case 'red':
        applyTheme(redTheme);
        break;
      case 'pink':
        applyTheme(pinkTheme);
        break;
    }
  }, [colorTheme])

  return(
    <div className={`bg-surface-primary relative rounded-2xl mb-4 p-4 flex flex-col w-[calc(100vw-2rem)] md:max-w-md`}>
      <header className="mb-4">
        <span className="text-headline text-xl leading-6">Escolha uma tema</span>
        <CloseButton />
      </header>

      <div>
        <RadioGroup className="mb-3" value={backgroundTheme} onChange={setBackgroundTheme}>
          <RadioGroup.Label className="text-paragraph">Cor de fundo</RadioGroup.Label>

          <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 rounded-md mt-2 p-2 md:p-4 bg-surface-secondary">
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
          <RadioGroup.Label className="text-paragraph mb-4">Cor</RadioGroup.Label>
          
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 rounded-md mt-2 p-2 md:p-4 bg-surface-secondary">
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