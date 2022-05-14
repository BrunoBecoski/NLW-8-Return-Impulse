import { WhatsappLogo } from 'phosphor-react';

import { Button } from './Button';

import womanImageUrl from '../assets/woman.png';

export function Header() {
  return (
    <header className="text-center px-6 pt-10 before:w-full before:h-[1040px] before:absolute before:top-0 before:left-0 before:z-[-1] before:bg-brand-200">
      <div className="flex flex-col items-center">
        <h4 className="text-sm font-bold uppercase text-brand-500 mt-10">Boas-vindas a DoctorCare 👋</h4>
        <h1 className="mt-4 font-bold text-3xl text-brand-headline" >Assistência médica simplificada para todos</h1>
        <p className="mt-6 text-lg">Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
        
        <Button className="mt-8">
          <WhatsappLogo size={20} />
          Agende sua consulta
        </Button>
      </div>
      <img 
        className="w-64 m-auto mt-16" 
        src={womanImageUrl} 
        alt="Mulher negra de moletom verde sorrindo"
      />

      <div className="py-10 rounded-md bg-brand-50 max-w-xs m-auto border-2 border-brand-200">
        <div>
          <h3 className="text-5xl font-bold text-brand-headline">+3.500</h3>
          <p className="text-brand-500">Pacientes atendidos</p>
        </div>
        <div className="my-16">
          <h3 className="text-5xl font-bold text-brand-headline">+15</h3>
          <p className="text-brand-500">Especialistas disponíveis</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-brand-headline">+10</h3>
          <p className="text-brand-500">Anos no mercado</p>
        </div>
      </div>
    </header>
  );
}