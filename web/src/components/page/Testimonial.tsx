import { useEffect, useRef, useState } from 'react';
import { Quotes } from 'phosphor-react';

interface CardProps {
  text: string;
  client: string;
}

function Card({ text, client }: CardProps) {
  return(
    <div className="p-8 flex flex-col gap-5 bg-brand-500/10 w-[calc(100vw_-_3rem)]">
      <Quotes className="text-brand-500" weight="fill" size={40} />
      <p className="text-paragraph">{text}</p>
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

export function Testimonial() {
  const carouselRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [cardListDots, setCardListDots] = useState([] as boolean[]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function setDimension() {
    setScreenWidth(window.innerWidth);
  }

  function scrollCard(index: number) {
    
    let newCardListDots: boolean[] = [];

    if(screenWidth < 768) {
      newCardListDots = [false, false, false, false];
    } else {
      newCardListDots = [false, false];
    }

    newCardListDots[index] = true;

    setCardListDots(newCardListDots);

    carouselRef.current.getElementsByTagName("li")[index].scrollIntoView({block: "nearest"});
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return () => {
      window.removeEventListener('resize', setDimension);
    }
  }, []);

  useEffect(() => {
    if(screenWidth < 768) {
      setCardListDots([true, false, false, false]);
    } else {
      setCardListDots([true, false]);
    }
  }, [screenWidth]);

  return (
    <section id="testimonial" className="pt-20 pb-20 bg-surface-primary"> 
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-14 text-center">
          <h4 className="font-bold text-sm text-brand-500 uppercase mb-4">Depoimentos</h4>
          <h2 className="font-bold text-3xl md:text-4xl text-headline">O que os clientes dizem<br className="hidden md:block"/> sobre o DoctorCare</h2>
        </header>
        
        <div ref={carouselRef} className="flex items-center relative overflow-hidden scroll-smooth w-full">
          {
            screenWidth < 768
            ? 
              <ul className="flex items-center gap-10">
                <li>
                  <Card 
                    text="1 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
                    client="Bruno Becoski"
                  />
                </li>
                <li>
                  <Card
                    text="2 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
                    client="Bruno Becoski"
                  />
                </li>
                <li>
                  <Card 
                    text="3 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
                    client="Bruno Becoski"
                  />
                </li>
                <li>
                  <Card
                    text="4 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
                    client="Bruno Becoski"
                  />
                </li>
              </ul>
            : 
              <ul className="flex items-center gap-10 w-full">
                <li className="flex gap-10 w-full">
                  <Card
                    text="1 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
                    client="Bruno Becoski"
                  />
                  <Card
                    text="2 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
                    client="Bruno Becoski"
                  />
                </li>
                <li className="flex gap-10 w-full">
                  <Card
                    text="3 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
                    client="Bruno Becoski"
                    />
                  <Card
                    text="4 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
                    client="Bruno Becoski"
                  />
                </li>
              </ul>
          }                        
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