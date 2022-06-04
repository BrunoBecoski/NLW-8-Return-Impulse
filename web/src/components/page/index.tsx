import { Header } from './Header';
import { Service } from './Service';
import { Testimonial } from './Testimonial';
import { Brands } from './Brands';
import { BannerCTA } from './BannerCTA';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function Page() {
  return (
    <div className="flex flex-col">
      <Header />
      <Service />
      <Testimonial />
      <Brands />
      <BannerCTA />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}