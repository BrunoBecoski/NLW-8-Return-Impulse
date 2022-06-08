import { Popover, Transition } from '@headlessui/react';
import { ChatTeardropDots, Gear, Image } from 'phosphor-react';

import { WidgetForm } from './WidgetForm';

export function Widget() {

  return (
    <Popover className="fixed flex items-center justify-center bottom-4 left-4 md:bottom-8 md:left-8 p-3 rounded-full bg-brand-500 text-brand-50 border-2 border-brand-50 transition-transform duration-1000">
 
      <Popover.Button className="hover:animate-spin ">
        <Gear size={24} />
      </Popover.Button>

      {/* <Transition
        enter="duration-1000 linear"
        enterFrom="scale-0"
        enterTo="scale-100"

        leave="duration-100 linear"
        leaveFrom="scale-100"
        leaveTo="scale-0"
        
      > */}
        <Popover.Panel>
          <Popover.Group className="flex justify-center gap-4 ml-10 transition-all duration-1000">

            <Popover className="flex">
              <Popover.Button>
                <ChatTeardropDots size={24} />
              </Popover.Button>

              <Popover.Panel className="absolute left-0 bottom-20 transition-all duration-1000 ease-linear" >
                <WidgetForm />  
              </Popover.Panel>

            </Popover>

            <Popover className="flex">
              <Popover.Button>
                <Image size={24} />
              </Popover.Button>

              <Popover.Panel className="absolute left-0 bottom-20" >
                theme
              </Popover.Panel>
            </Popover>

          </Popover.Group>
        </Popover.Panel>
      {/* </Transition> */}
    </Popover>
  );
}