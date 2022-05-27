import doctorImageUrl from '../../assets/doctor.png';

export function About() {
  return (
    <section id="about" className="bg-brand-200">
      <div className="max-w-6xl m-auto">
        <header className="mb-6">
          <h4 className="font-bold text-sm text-brand-500 uppercase mb-4">Sobre nós</h4>
          <h2 className="font-bold text-3xl text-brand-headline">Entenda quem somos e por que existimos</h2>
        </header>

        <div>
          <p className="mb-14">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>

          <img 
            className="max-w-full"
            src={doctorImageUrl}
            alt="Doutor feliz segurando prancheta com pacientes"
          />
        </div>
      </div>
    </section>
  );
}