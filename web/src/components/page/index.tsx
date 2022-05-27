import { About } from './About';
import { Brands } from './Brands';
import { Contact } from './Contact';
import { Testimonial } from './Testimonial';
import { Footer } from './Footer';
import { Header } from './Header';
import { Service } from './Service';

export function Page() {
  return (
    <div className="m-auto flex flex-col">
      <Header />
      <Service />
      <Testimonial />
      <Brands />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}