import { useState } from 'react';

import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Services } from './components/Services';
import { Depositions } from './components/Depositions';
import { Brands } from './components/Brands';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
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
          <Depositions />
          <Brands />
          <About />
          <Contact />
          <Footer />
          <Widget />
        </>
      }
    </div>
  );
}