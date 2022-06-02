import { useEffect, useRef, useState } from 'react';
import { Quotes } from 'phosphor-react';

interface CardProps {
  text: string;
  client: string;
}

function Card({ text, client }: CardProps) {
  return(
    <div className="p-8 flex flex-col gap-5 bg-brand-200 w-[calc(100vw_-_3rem)] md:max-w-[calc(1152px_/_2_-_3rem)]">
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

    carouselRef.current.getElementsByTagName("li")[index].scrollIntoView({block: "center", inline: "center"});
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
    <section id="testimonial" className="mt-5 pt-20 pb-20 bg-brand-50"> 
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-14 text-center">
          <h4 className="font-bold text-sm text-brand-500 uppercase mb-4">Depoimentos</h4>
          <h2 className="font-bold text-3xl md:text-4xl text-brand-headline">O que os clientes dizem<br className="hidden md:block"/> sobre o DoctorCare</h2>
        </header>
        
        <div ref={carouselRef}  className="flex items-center relative overflow-hidden scroll-smooth">
          {
            screenWidth < 768
            ? 
              <ul className="flex items-center gap-10 md:hidden w-full">
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
              <ul className="md:flex items-center gap-10 hidden">
                <li className="flex gap-10">
                  <Card 
                    text="1 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
                    client="Bruno Becoski"
                  />
                  <Card
                    text="2 - Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." 
                    client="Bruno Becoski"
                  />
                </li>
                <li className="flex gap-10">
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