import { CheckCircle } from "phosphor-react"

interface CardProps {
  title: string;
  text: string;
}

function Card({ title, text }: CardProps) {
  return (
    <div>
      <CheckCircle />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export function Services() {
  return (
    <section>
      <header>
        <h4>Serviços</h4>
        <h2>Como podemos ajudá-lo a se sentir melhor?</h2>
      </header>

      <div>
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