import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import './dropdown.module.css';

const Dropdown = () => (
  <Popover.Root>
    <Popover.Trigger className="PopoverTrigger">Show info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent">
        Some content
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default Dropdown;
