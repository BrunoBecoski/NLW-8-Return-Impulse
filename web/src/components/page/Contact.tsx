import { EnvelopeSimple, MapPin, WhatsappLogo } from 'phosphor-react';

import { PrimaryButton } from '../common/PrimaryButton';

import menImageUrl from '../../assets/men.png';

export function Contact() {
  return(
    <section id="contact" className="py-20 bg-brand-50">
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-center">
        <div>
          <header className="mb-8 md:mb-10">
            <h2 className="font-bold text-3xl md:text-4xl text-brand-headline">Entre em contato<br className="hidden md:block" />  com a gente!</h2>
          </header>

          <div>
            <ul className="flex flex-col gap-4 mb-8 md:mb-10">
              <li className="flex gap-2">
                <MapPin size={24} weight="bold" className="text-brand-500" />
                R. Amauri Souza, 346
              </li>
              <li className="flex gap-2">
                <EnvelopeSimple size={24} weight="bold" className="text-brand-500"/>
                contato@doctorcare.com
              </li>
            </ul>

            <a className="inline-block mb-14 md:mb-0" target="_blank" href="https://wa.me/0123456789">
              <PrimaryButton>
                <WhatsappLogo size={24} />
                Agende sua consulta
              </PrimaryButton>
            </a>
          </div>
        </div>

        <img 
          className="max-w-full md:w-1/2 object-cover"
          src={menImageUrl} 
          alt="Homem negro com moletom bege mexendo no celular e sorrindo"
        />
      </div>
    </section>
  );
}