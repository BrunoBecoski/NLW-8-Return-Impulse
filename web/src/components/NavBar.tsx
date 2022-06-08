import { useEffect, useRef, useState } from 'react';
import { ArrowUp, FacebookLogo, InstagramLogo, List, X, YoutubeLogo } from 'phosphor-react';

import { PrimaryButton } from './common/PrimaryButton';
import { SecondaryButton } from './common/SecondaryButton';

import logoImageUrl from '../assets/logo.svg';
import logoOnSurfaceUrl from '../assets/logoOnSurface.svg';

export function NavBar() {
  const [offset, setOffset] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [hover, setHover] = useState('header')

  const [headerHeight, setHeaderHeight] = useState(0);  
  const [serviceHeight, setServiceHeight] = useState(0);  
  const [testimonialHeight, setTestimonialHeight] = useState(0); 
  const [aboutHeight, setAboutHeight] = useState(0);

  const navRef = useRef<HTMLDivElement>(null);
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
    navRef.current?.classList.add("bg-brand-500");
    navRef.current?.classList.remove("bg-brand-200");

    buttonRef.current?.classList.add("text-brand-50");
    buttonRef.current?.classList.remove("text-brand-500");

    ulRef.current?.classList.add("text-brand-100");
    ulRef.current?.classList.remove("text-brand-500");
  }
  
  function removeStyle() {
    navRef.current?.classList.remove("bg-brand-500");
    navRef.current?.classList.add("bg-brand-200");

    buttonRef.current?.classList.remove("text-brand-50");
    buttonRef.current?.classList.add("text-brand-500");

    ulRef.current?.classList.remove("text-brand-100");
    ulRef.current?.classList.add("text-brand-500");
  }

  function handleRedirect(value: string) {
    handleButtonList();
    window.location.replace(`/#${value}`);
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
    setHeaderHeight(
      document.getElementById('header')?.offsetHeight
      +
      document.getElementById('header')?.offsetTop
    );

    setServiceHeight(
      document.getElementById('service')?.offsetHeight
      +
      document.getElementById('service')?.offsetTop
    );

    setTestimonialHeight(
      document.getElementById('testimonial')?.offsetHeight
      +
      document.getElementById('testimonial')?.offsetTop
    );

    setAboutHeight(
      document.getElementById('about')?.offsetHeight
      +
      document.getElementById('about')?.offsetTop
    );
  }, []);
  
  useEffect(() => {
    if(offset < headerHeight) {
      setHover('header');
    } else if (offset <=  serviceHeight) {
      setHover('service');
    } else if (offset <=  testimonialHeight) {
      setHover('testimonial');
    } else if (offset <=  aboutHeight) {
      setHover('about');
    } else {
      setHover('contact');
    }
  }, [offset]);

  const hoverStyle = `font-bold after:block after:relative after:w-full after:h-[2px] after:top-[22px] after:bg-brand-${offset > 0 ? '50' : '500' }`;

  return (
    <>
      <nav ref={navRef} className="flex flex-col fixed z-50 w-screen">
        <div className="flex justify-center px-6">
          <div className="flex justify-between items-center flex-1 max-w-6xl py-4">
            <a href="#">
              <img
                className="h-4"
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
              <li className={`hover:opacity-80 ${hover === 'header' && hoverStyle}`}>
                <a href="#header">Início</a>
              </li>
              <li className={`hover:opacity-80 ${hover === 'service' && hoverStyle}`}>
                <a href="#service">Serviços</a>
              </li>
              <li className={`hover:opacity-80 ${hover === 'testimonial' &&  hoverStyle}`}>
                <a href="#testimonial">Depoimentos</a>
              </li>
              <li className={`hover:opacity-80 ${hover === 'about' && hoverStyle}`}>
                <a href="#about">Sobre</a>
              </li>
            </ul>          

            <SecondaryButton 
              className={`hidden md:block ${hover === 'contact' && 'bg-brand-50 text-brand-500' }`}
              onSurface={!(offset == 0)}
              onClick={() => window.location.replace("#contact")}
            >
              Agendar consulta
            </SecondaryButton>

          </div>
        </div>

          {
            menuIsOpen &&
            <div 
              style={{ height: `calc(${window.innerHeight}px - ${navRef.current?.clientHeight}px)` }} 
              className="flex flex-col justify-evenly items-center text-center gap-10 bg-brand-500"
            >
              <ul className="flex flex-col gap-10 text-brand-50 text-2xl font-bold">
                <li className="hover:opacity-80">
                  <a onClick={() => handleRedirect("header")}>Início</a>
                </li>
                <li className="hover:opacity-80">
                  <a onClick={() => handleRedirect("service")}>Serviços</a>
                </li>
                <li className="hover:opacity-80">
                  <a onClick={() => handleRedirect("testimonial")}>Depoimentos</a>
                </li>
                <li className="hover:opacity-80">
                  <a onClick={() => handleRedirect("about")}>Sobre</a>
                </li>
              </ul>

              <PrimaryButton onClick={() => handleRedirect("contact")} onSurface>
                Agende sua consulta
              </PrimaryButton>
            
              <ul className="flex gap-8 text-brand-50">
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
      {
        offset > 200 &&
          <span className="flex flex-col items-end fixed z-50 bottom-4 right-4 md:bottom-8 md:right-8">
            <button onClick={() => window.location.replace('/#header')} className="flex items-center p-3 group bg-brand-500 rounded-full text-brand-50 border-2 border-brand-50">
              <ArrowUp size={24} weight='bold' />
            </button>
          </span>
      }
    </>
  );
}