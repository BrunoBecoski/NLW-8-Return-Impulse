import { Popover, Transition } from '@headlessui/react';
import { ChatTeardropDots, GearSix, PaintBrush } from 'phosphor-react';

import { WidgetForm } from './WidgetForm';
import { WidgetTheme } from './WidgetTheme';

export function Widget() {
  return (
    <Popover className="fixed flex items-center justify-center bottom-4 left-4 md:bottom-8 md:left-8 p-3 rounded-full bg-brand-500 text-onSurface border-2 border-stroke transition-transform duration-1000">
      {({ open }) => (<>
        <Popover.Button>
          <GearSix
            size={24}
            className={`transition duration-1000 ${open ? 'rotate-45' : '-rotate-45'}`}
          />
        </Popover.Button>

        <Popover.Panel>

          <Popover.Group className="flex flex-row justify-center gap-4 ml-10">
            <Popover className="flex">
              <Popover.Button>
                <ChatTeardropDots size={24} />
              </Popover.Button>

              <Popover.Panel className="absolute left-0 bottom-14" >
                <WidgetForm />
              </Popover.Panel>
            </Popover>

            <Popover className="flex">
              <Popover.Button>
                <PaintBrush size={24} />
              </Popover.Button>

              <Popover.Panel className="absolute left-0 bottom-14" >
                <WidgetTheme />
              </Popover.Panel>
            </Popover>
          </Popover.Group>
        </Popover.Panel>
      </>)}
    </Popover>
  );
}