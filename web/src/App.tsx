import { useState } from 'react';

import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Widget } from './components/Widget';

export function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

 return (
    <div>
      <NavBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
      {
        !menuIsOpen &&
        <>
          <Header />
          <Services />
          <About />
          <Contact />
          <Widget />
        </>
      }
    </div>
  );
}