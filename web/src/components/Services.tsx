import { Check } from "phosphor-react"

interface CardProps {
  title: string;
  text: string;
}

function Card({ title, text }: CardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-md bg-brand-50 border-2 border-brand-200">
      <div className="flex justify-center items-center w-6 h-6 rounded-full bg-brand-200">
        <Check weight="bold" className="text-brand-500"/>
      </div>
      <h3 className="font-bold text-2xl text-brand-headline">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export function Services() {
  return (
    <section className="px-6 mt-24 mb-24">
      <header className="px-2 text-center mb-14">
        <h4 className="font-bold text-sm uppercase text-brand-500 mb-4">Serviços</h4>
        <h2 className="font-bold text-3xl text-brand-headline">Como podemos ajudá-lo a se sentir melhor?</h2>
      </header>

      <div className="flex flex-col gap-8"> 
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
          title="Saúde do Coração digestivos"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
        />
      </div>
    </section>
  );
}