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
    <div className={`flex justify-between border-2 cursor-pointer
      ${checked && 'border-brand-500'}
      ${type === 'light' ? 'bg-white' : 'bg-black'}
    `}>
      <p className={
        type === 'light' ? 'text-black' :'text-white'
      }>Tema {type === 'light' ? 'claro' : 'escuro'}</p>
      <div className={`flex items-center justify-center h-6 w-6 rounded-full border-2 ${checked ? 'border-brand-500' : 'border-brand-50'}`}>
        <Check size={20} weight="bold" className={checked ? 'text-brand-500' : 'text-transparent'} />
      </div>
    </div>
  );
}

export function WidgetTheme() {
  const [backgroundTheme, setBackgroundTheme] = useState('light');

  return(
    <div className="bg-brand-200 p-4 relative rounded-md mb-4 flex flex-col border-2 border-brand-500 w-[calc(100vw-2rem)] md:w-80">
      <header>
        <span className="text-brand-headline text-xl leading-6">Escolha uma tema</span>
        <CloseButton />
      </header>

      <div>
        <RadioGroup value={backgroundTheme} onChange={setBackgroundTheme}>
          <RadioGroup.Label className="text-brand-headline">Tema de fundo</RadioGroup.Label>

          <div className="flex justify-between rounded-sm p-3 bg-brand-100">
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
      </div>
    </div>
  );
}