import { Quotes } from "phosphor-react";
import { useRef } from "react";

interface CardProps {
  text: string;
  client: string;
}

function Card({ text, client }: CardProps) {
  return(
    <div className="p-8 flex flex-col gap-5 bg-brand-100 w-[calc(100vw_-_3rem)]">
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
  const carouselRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  function click1() {
    carouselRef.current.scrollLeft -= (carouselRef.current.offsetWidth + 70);
  }
  
  function click2() {
    carouselRef.current.scrollLeft += (carouselRef.current.offsetWidth + 70);
  }
   
  return (
    <section className="px-6 py-24 bg-brand-50 rounded"> 
      <header className="mb-14">
        <h4 className="font-bold text-sm text-brand-500 uppercase mb-4">Depoimentos</h4>
        <h2 className="font-bold text-3xl text-brand-headline">O que os clientes dizem sobre o DoctorCare</h2>
      </header>
      
      <div ref={carouselRef}  className="flex items-center relative overflow-hidden scroll-smooth">
        <div className="flex items-center gap-10">
          <Card 
            text="UM Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
            client="Bruno Becoski"
          />
          <Card
            text="DOIS Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
            client="Bruno Becoski"
          />
        </div>
      </div>

      <div className="flex gap-2 justify-center mt-10">
        <button onClick={click1} className="h-3 w-3 bg-brand-500 rounded-full"></button>
        <button onClick={click2} className="h-3 w-3 bg-brand-100 rounded-full"></button>
      </div>
    </section>
  );
}