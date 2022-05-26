import { useEffect, useRef, useState } from 'react';
import { FacebookLogo, InstagramLogo, List, X, YoutubeLogo } from 'phosphor-react';

import { PrimaryButton } from './common/PrimaryButton';
import { SecondaryButton } from './common/SecondaryButton';

import logoImageUrl from '../assets/logo.svg';
import logoOnSurfaceUrl from '../assets/logoOnSurface.svg';

export function NavBar() {
  const [offset, setOffset] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [headerHeight, setHeaderHeight] = useState(0);  
  const [serviceHeight, setServiceHeight] = useState(0);  
  const [testimonialHeight, setTestimonialHeight] = useState(0); 
  const [aboutHeight, setAboutHeight] = useState(0);

  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  function setScroll() {
    setOffset(window.scrollY);
  };

  function handleButtonList() {
    setMenuIsOpen(!menuIsOpen);
    document.body.style.overflowY = !menuIsOpen ? "hidden" : "scroll";
  }

  function addStyle() {
    divRef.current?.classList.add("bg-brand-500");
    divRef.current?.classList.remove("bg-brand-200");

    buttonRef.current?.classList.add("text-brand-50");
    buttonRef.current?.classList.remove("text-brand-500");

    ulRef.current?.classList.add("text-brand-100");
    ulRef.current?.classList.remove("text-brand-500");
  }
  
  function removeStyle() {
    divRef.current?.classList.remove("bg-brand-500");
    divRef.current?.classList.add("bg-brand-200");

    buttonRef.current?.classList.remove("text-brand-50");
    buttonRef.current?.classList.add("text-brand-500");

    ulRef.current?.classList.remove("text-brand-100");
    ulRef.current?.classList.add("text-brand-500");
  }

  function handleRedirect(value: string) {
    handleButtonList();
    setTimeout(() => {
      window.location.replace(`/#${value}`);
    }, 0);
  }
  
  useEffect(() => {
    if(offset > 0 || menuIsOpen) {
      addStyle()
    } else {
      removeStyle()
    }
  }, [offset, menuIsOpen])

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  useEffect(() => {
    setHeaderHeight(document.getElementById('header')?.offsetHeight as number);
    setServiceHeight(document.getElementById('service')?.offsetHeight as number);
    setTestimonialHeight(document.getElementById('testimonial')?.offsetHeight as number);
    setAboutHeight(document.getElementById('about')?.offsetHeight as number);
    setAboutHeight(document.getElementById('about')?.offsetHeight as number);
  }, []);

  useEffect(() => {
    if(offset < headerHeight) {
      console.log('header');
    } else if (offset < headerHeight + serviceHeight) {
      console.log('service');
    } else if (offset < headerHeight + serviceHeight + testimonialHeight) {
      console.log('testimonial');
    } else if (offset < headerHeight + serviceHeight + testimonialHeight + aboutHeight) {
      console.log('about');
    } else {
      console.log('footer');
    }
  }, [offset]);

  return (
    <nav className="flex flex-col fixed z-50 ">
      <div 
        ref={divRef}
        className="flex justify-between items-center w-screen px-6 py-4 transition-colors"
      >
        <a href="#">
          <img
            className="h-[18px]"
            src={offset > 0 || menuIsOpen ? logoOnSurfaceUrl : logoImageUrl } 
            alt="Logo DoctorCare"
          />
        </a>       
        
        <button
          ref={buttonRef}
          onClick={handleButtonList} 
          className="text-brand-500 md:hidden"
        >
          {
            menuIsOpen
            ? <X size={20} weight={'bold'} />
            : <List size={20} weight={'bold'} />
          }
        </button>

        <ul
          ref={ulRef}
          className="hidden md:flex gap-8 text-brand-500"
        >
          <li className="
            hover:opacity-80 font-bold 
            after:block after:relative after:w-full after:h-[2px] after:top-[22px] after:bg-pink-500
          ">
            <a onClick={() => handleRedirect("header")}>Início</a>
          </li>

          <li className="hover:opacity-80">
            <a onClick={() => handleRedirect("service")}>Serviços</a>
          </li>
          <li className="hover:opacity-80">
            <a onClick={() => handleRedirect("depositions")}>Depoimentos</a>
          </li>
          <li className="hover:opacity-80">
            <a onClick={() => handleRedirect("about")}>Sobre</a>
          </li>
        </ul>          

        <SecondaryButton 
          className="hidden md:block"
          onSurface={!(offset == 0)}
          onClick={() => handleRedirect("contact")}
        >
          Agendar consulta
        </SecondaryButton>

      </div>

      {
        menuIsOpen && 
        <div 
          style={{ height: `calc(${window.innerHeight}px - ${divRef.current?.clientHeight}px)` }}
          className="flex flex-col items-center justify-around w-screen text-center bg-brand-500 md:hidden"
        >
          <div className="flex flex-col gap-10">
            <ul className="flex flex-col gap-10 text-brand-50 text-2xl font-bold">
              <li className="hover:opacity-80">
                <a onClick={() => handleRedirect("header")}>Início</a>
              </li>
              <li className="hover:opacity-80">
                <a onClick={() => handleRedirect("service")}>Serviços</a>
              </li>
              <li className="hover:opacity-80">
                <a onClick={() => handleRedirect("depositions")}>Depoimentos</a>
              </li>
              <li className="hover:opacity-80">
                <a onClick={() => handleRedirect("about")}>Sobre</a>
              </li>
            </ul>

            <PrimaryButton onClick={() => handleRedirect("contact")} onSurface>
              Agende sua consulta
            </PrimaryButton>
          </div>
            

          <ul className="flex gap-8 text-brand-50 md:hidden">
            <li className="hover:opacity-80">
              <a target="_blank" href="https://www.instagram.com">
                <InstagramLogo size={24} weight={'bold'} />
              </a>
            </li>
            <li className="hover:opacity-80">
              <a target="_blank" href="https://www.facebook.com">
                <FacebookLogo size={24} weight={'bold'} />
              </a>
            </li>
            <li className="hover:opacity-80">
              <a target="_blank" href="https://www.youtube.com">
                <YoutubeLogo size={24} weight={'bold'} />
              </a>
            </li>
          </ul>
        </div>
      }
    </nav>
  );
}