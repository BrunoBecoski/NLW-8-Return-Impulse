import { WhatsappLogo } from 'phosphor-react';

import { PrimaryButton } from '../common/PrimaryButton';

import womanImageUrl from '../../assets/woman.png';

export function Header() {
  
  function handleContact() {
    window.location.replace("/#contact");
  }

  return (
    <header id="header" className="pt-10 before:w-full before:h-[1080px] md:before:h-[678px] before:absolute before:top-0 before:left-0 before:-z-10 before:bg-brand-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h4 className="text-sm font-bold uppercase text-brand-500 mt-10">Boas-vindas a DoctorCare 👋</h4>
            <h1 className="mt-4 font-bold text-3xl md:text-5xl text-brand-headline" >Assistência médica simplificada para todos</h1>
            <p className="mt-6 text-lg">Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
            
            <PrimaryButton onClick={handleContact} className="mt-8">
              <WhatsappLogo size={20} />
              Agende sua consulta
            </PrimaryButton>
          </div>
          <img 
            className="h-[340px] md:h-[550px] mx-auto mt-16  md:-z-10" 
            src={womanImageUrl} 
            alt="Mulher negra vestindo moletom verde com as duas mãos no peito e sorrindo"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-14 py-10 md:py-14 px-16 md:px-28 w-min md:w-auto mx-auto text-center md:-mt-14 rounded-md bg-brand-50 border-2 border-brand-200">
          <div>
            <h3 className="text-5xl font-bold text-brand-headline mb-1">+3.500</h3>
            <p className="text-brand-500">Pacientes atendidos</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-brand-headline mb-1">+15</h3>
            <p className="text-brand-500">Especialistas disponíveis</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-brand-headline mb-1">+10</h3>
            <p className="text-brand-500">Anos no mercado</p>
          </div>
        </div>
      </div>
    </header>
  );
}