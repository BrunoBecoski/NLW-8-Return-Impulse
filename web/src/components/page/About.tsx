import doctorImageUrl from '../../assets/doctor.png';

export function About() {
  return (
    <section id="about" className="py-20 bg-brand-100">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:flex-row-reverse md:gap-16">
        <div>
          <header className="mb-6">
            <h4 className="font-bold text-sm text-brand-500 uppercase mb-4">Sobre nós</h4>
            <h2 className="font-bold text-3xl md:text-4xl text-headline">Entenda quem somos<br className="hidden md:block" /> e por que existimos</h2>
          </header>

          <p className="mb-14 md:mb-0 text-paragraph">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>

          <img 
            className="max-w-full md:w-1/3 object-cover"
            src={doctorImageUrl}
            alt="Doutor feliz segurando prancheta com pacientes"
          />
      </div>
    </section>
  );
}