import { Quotes } from "phosphor-react";

interface CardProps {
  text: string;
  client: string;
}

function Card({ text, client }: CardProps) {
  return(
    <div className="p-8 flex flex-col gap-5 bg-brand-100 ">
      <Quotes className="text-brand-500" weight="fill" size={40} />
      <p>{text}</p>
      <div className="flex items-center gap-4 ">
        <img 
          className="w-10 h-10 rounded-full"
          src="https://github.com/brunobecoski.png" 
          alt={`${client} avatar`}
        />
        <p className="font-bold text-lg text-brand-500">{client}</p>
      </div>
    </div>
  );
}

export function Depositions() {
  return (
    <section className="px-6 py-24 bg-brand-50 rounded"> 
      <header className="mb-14">
        <h4 className="font-bold text-sm text-brand-500 uppercase mb-4">Depoimentos</h4>
        <h2 className="font-bold text-3xl text-brand-headline">O que os clientes dizem sobre o DoctorCare</h2>
      </header>
      
      <div className="relative overflow-hidden h-96">
        <div className="flex gap-8 absolute">
          <Card 
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim." 
            client="Bruno Becoski"
          />
          <Card
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim." 
            client="Bruno Becoski"
          />
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        <button className="h-3 w-3 bg-brand-500 rounded-full"></button>
        <button className="h-3 w-3 bg-brand-200 rounded-full"></button>
      </div>
    </section>
  );
}