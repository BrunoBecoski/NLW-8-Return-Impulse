import { useState } from 'react';

import { NavBar } from './components/NavBar';
import { Page } from './components/page';
import { Widget } from './components/Widget';

export function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

 return (
    <div>
      <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
      <Page />
      <Widget />
    </div>
  );
}