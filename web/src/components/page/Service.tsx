import { Check } from "phosphor-react"

interface CardProps {
  title: string;
  text: string;
}

function Card({ title, text }: CardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-xs rounded-md bg-surface-secondary border-2 border-stroke">
      <div className="flex justify-center items-center w-6 h-6 rounded-full bg-brand-500/20">
        <Check weight="bold" className="text-brand-500"/>
      </div>
      <h3 className="font-bold text-2xl text-headline">{title}</h3>
      <p className="text-paragraph">{text}</p>
    </div>
  );
}

export function Service() {
  return (
    <section id="service" className="mt-5 pt-20 pb-20 bg-surface-primary">
      <div className="max-w-6xl mx-auto px-6">
        <header className="px-2 text-center mb-14">
          <h4 className="font-bold text-sm uppercase text-brand-500 mb-4">Serviços</h4>
          <h2 className="font-bold text-3xl md:text-4xl text-headline">Como podemos ajudá-lo<br className="hidden md:block" /> a se sentir melhor?</h2>
        </header>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10"> 
          <Card
            title="Problema digestivos"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
          <Card
            title="Saúde Hormonal"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
          <Card
            title="Bem-estar mental"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
          <Card
            title="Cuidados Pediátricos"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
          <Card
            title="Autoimune e Inflamação"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
          <Card
            title="Saúde do Coração"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
        </div>
      </div>
    </section>
  );
}