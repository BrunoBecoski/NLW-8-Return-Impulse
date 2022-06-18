import { WhatsappLogo } from "phosphor-react";
import { PrimaryButton } from "../common/PrimaryButton";

export function BannerCTA() {

  function handleContact() {
    window.location.replace("/#contact");
  }

  return (
    <section className="md:px-6 relative 
      before:w-full before:h-1/2 before:absolute before:top-0 before:left-0 before:-z-10 before:bg-onSurface
      after:w-full after:h-1/2 after:absolute after:bottom-0 after:left-0 after:-z-10 after:bg-brand-100
    ">
      <div className="max-w-6xl mx-auto py-14 px-6 md:p-28 md:rounded-xl flex flex-col md:flex-row gap-6 items-center md:justify-between bg-brand-500">
        <h2 className="font-bold text-3xl md:text-4xl text-center md:text-left text-onSurface">Comece a cuidar de sua <br className="hidden md:block"/> saúde agora mesmo</h2>
        <PrimaryButton onClick={handleContact} onSurface className="text-sm mt-6 md:mt-0">
          <WhatsappLogo size={20} />
          Agende sua consulta
        </PrimaryButton>
      </div>
    </section>
  );
}