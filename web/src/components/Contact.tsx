import { Button } from "./Button";
import { EnvelopeSimple, MapPin, WhatsappLogo } from "phosphor-react";

import manImageUrl from '../assets/man.png';

export function Contact() {
  return(
    <section id="contact" className="px-6 mt-11 mb-24 pt-14">
      <header className="mb-8">
        <h2 className="font-bold text-3xl text-brand-headline">Entre em contato com a gente!</h2>
      </header>
      <div>
        <ul className="flex flex-col gap-4 mb-8">
          <li className="flex gap-2">
            <MapPin size={24} weight="bold" className="text-brand-500" />
            R. Amauri Souza, 346
          </li>
          <li className="flex gap-2">
            <EnvelopeSimple size={24} weight="bold" className="text-brand-500"/>
            contato@doctorcare.com
          </li>
        </ul>

        <a className="inline-block mb-14" target="_blank" href="https://wa.me/0123456789">
          <Button>
            <WhatsappLogo size={24} />
            Agende sua consulta
          </Button>
        </a>

        <img 
          className="max-w-full"
          src={manImageUrl} 
          alt="Homem negro com moletom bege mexendo no celular e sorrindo"
        />
      </div>
    </section>
  );
}