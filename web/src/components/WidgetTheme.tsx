import { RadioGroup } from '@headlessui/react';
import { Check } from 'phosphor-react';
import { useState } from 'react';

import { CloseButton } from './common/CloseButton';

interface BackgroundThemeButtonProps {
  type: 'light' | 'dark';
  checked: boolean;
}

function BackgroundThemeButton({ type, checked }: BackgroundThemeButtonProps) {
  return (
    <div className={`flex justify-center items-center p-3 border-4 cursor-pointer rounded-full
      ${checked && 'border-brand-500'}
      ${type === 'light' ? 'bg-white' : 'bg-black'}
    `}>
      <div className={`flex justify-center items-center h-6 w-6 rounded-full border-2 
        ${checked ? 'bg-brand-500 border-brand-500' : 'border-gray-500'}`}>
        <Check size={16} weight="bold" className={checked ? 'text-brand-50' : 'text-transparent'} />
      </div>
      <div className="flex flex-1 justify-center">

        <p className={checked ? 'text-brand-500 font-bold' : type === 'light' ? 'text-black' :'text-white'}>
          Tema {type === 'light' ? 'claro' : 'escuro'}
        </p>
      </div>

    </div>
  );
}

export function WidgetTheme() {
  const [backgroundTheme, setBackgroundTheme] = useState('light');
  const [colorTheme, setColorTheme] = useState('green');


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
              <RadioGroup.Option value="green">
                {({ checked }) => (
                  <div className="h-4 w-4 rounded-full bg-green-500" />
                )}
              </RadioGroup.Option>

              <RadioGroup.Option value="orange">
                {({ checked }) => (
                  <div className="h-4 w-4 rounded-full bg-orange-500" />
                )}
              </RadioGroup.Option>

              <RadioGroup.Option value="blue">
                {({ checked }) => (
                  <div className="h-4 w-4 rounded-full bg-blue-500" />
                )}
              </RadioGroup.Option>

              <RadioGroup.Option value="purple">
                {({ checked }) => (
                  <div className="h-4 w-4 rounded-full bg-purple-500" />
                )}
              </RadioGroup.Option>

              <RadioGroup.Option value="red">
                {({ checked }) => (
                  <div className="h-4 w-4 rounded-full bg-red-500" />
                )}
              </RadioGroup.Option>
            </div>
        </RadioGroup>

      </div>
    </div>
  );
}