import { useRef, useState } from 'react';
import { Quotes } from 'phosphor-react';

interface CardProps {
  text: string;
  client: string;
}

function Card({ text, client }: CardProps) {
  return(
    <li className="p-8 flex flex-col gap-5 bg-brand-100 w-[calc(100vw_-_3rem)]">
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
    </li>
  );
}

export function Testimonial() {
  const carouselRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [cardListDots, setCardListDots] = useState([true, false, false, false]);

  function scrollCard(index: number) {
    const newCardListDots = [false, false, false, false];
    newCardListDots[index] = true;

    setCardListDots(newCardListDots);

    carouselRef.current.getElementsByTagName("li")[index].scrollIntoView({block: "center", inline: "center"});
  }
  
  return (
    <section id="testimonial" className="bg-brand-50"> 
      <div className="max-w-6xl m-auto">
        <header className="mb-14">
          <h4 className="font-bold text-sm text-brand-500 uppercase mb-4">Depoimentos</h4>
          <h2 className="font-bold text-3xl text-brand-headline">O que os clientes dizem sobre o DoctorCare</h2>
        </header>
        
        <div ref={carouselRef}  className="flex items-center relative overflow-hidden scroll-smooth">
          <ul className="flex items-center gap-10">
            <Card 
              text="1 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
              client="Bruno Becoski"
            />
            <Card
              text="2 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
              client="Bruno Becoski"
            />
            <Card 
              text="3 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
              client="Bruno Becoski"
            />
            <Card
              text="4 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
              client="Bruno Becoski"
            />
          </ul>
        </div>

        <div className="flex gap-2 justify-center mt-10">
          {
            cardListDots.map((card, index) => 
              card
              ? <button key={index} onClick={() => scrollCard(index)} className="h-3 w-3 bg-brand-500 rounded-full" />
              : <button key={index} onClick={() => scrollCard(index)} className="h-3 w-3 bg-brand-200 rounded-full" />
            )
          }
        </div>
      </div>
    </section>
  );
}