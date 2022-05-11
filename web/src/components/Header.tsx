import { WhatsappLogo } from 'phosphor-react';

import womanImageUrl from '../assets/woman.png';

export function Header() {
  return (
    <header className="text-center bg-brand-200 h-[64rem] px-6 pt-10">
        <div>
          <h4 className="text-sm text-brand-500 mt-10">Boas-vindas a DoctorCare 👋</h4>
          <h1 className="mt-4 font-bold text-3xl text-brand-headline" >Assistência médica simplificada para todos</h1>
          <p className="mt-6 text-lg">Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
         
          <button className="mt-8 mx-auto bg-brand-500 text-brand-50 font-bold text-sm flex items-center justify-center gap-4 py-4 px-8 rounded-3xl">
            <WhatsappLogo size={20} />
            Agende sua consulta
          </button>

        </div>
        <img className="w-64 m-auto mt-16" 
          src={womanImageUrl} 
          alt="Mulher negra de moletom verde sorrindo"
        />

        <div className="py-10 rounded-md bg-brand-50 max-w-xs m-auto">
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