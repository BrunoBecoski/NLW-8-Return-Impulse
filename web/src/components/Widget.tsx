import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

import { WidgetForm } from './WidgetForm';

export function Widget() {

  return (
    <Popover className="fixed flex flex-col items-end bottom-4 right-4 md:bottom-8 md:right-8">
      <Popover.Panel>
        <WidgetForm />  
      </Popover.Panel>

      <Popover.Button className="flex items-center p-3 group bg-brand-500 rounded-full text-brand-50 border-2 border-brand-50">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}