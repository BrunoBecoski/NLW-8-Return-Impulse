import { About } from './About';
import { Brands } from './Brands';
import { Contact } from './Contact';
import { Depositions } from './Depositions';
import { Footer } from './Footer';
import { Header } from './Header';
import { Services } from './Services';

export function Page() {
  return (
    <>
      <Header />
      <Services />
      <Depositions />
      <Brands />
      <About />
      <Contact />
      <Footer />
    </>
  );
}