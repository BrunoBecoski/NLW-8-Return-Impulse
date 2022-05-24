import { useEffect, useRef, useState } from 'react';
import { FacebookLogo, InstagramLogo, List, X, YoutubeLogo } from 'phosphor-react';

import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

import logoImageUrl from '../assets/logo.svg';
import logoOnSurfaceUrl from '../assets/logoOnSurface.svg';

interface NavBarProps {
  menuIsOpen: boolean;
  setMenuIsOpen: (data: boolean) => void;
}

export function NavBar({ menuIsOpen, setMenuIsOpen }: NavBarProps) {
 const [offset, setOffset] = useState(0);
 const divRef = useRef<HTMLDivElement>(null);

  function setScroll() {
    setOffset(window.scrollY);
  };

  function handleButtonList() {
    setMenuIsOpen(!menuIsOpen);
  }

  function addStyle() {
    divRef.current?.classList.add("bg-brand-500");
    divRef.current?.getElementsByClassName("button-list")[0].classList.add("text-brand-50");
  }
  
  function removeStyle() {
    divRef.current?.classList.remove("bg-brand-500");
    divRef.current?.getElementsByClassName("button-list")[0].classList.remove("text-brand-50");
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

  return (
    <nav className="flex flex-col fixed z-50">
      <div ref={divRef} className="flex justify-between items-center w-screen px-6 py-4 transition-colors">
        <a href="#">
          <img
            className="h-[18px]"
            src={offset > 0 || menuIsOpen ? logoOnSurfaceUrl : logoImageUrl } 
            alt="Logo DoctorCare"
          />
        </a>

        <button onClick={handleButtonList} className="button-list text-brand-500 md:hidden">
          {
            menuIsOpen
            ? <X size={20} weight={'bold'} />
            : <List size={20} weight={'bold'} />
          }
        </button>
      
        {/* <div 
          style={{ height: `calc(${window.innerHeight}px - ${divRef.current?.clientHeight}px)` }}
          className="flex flex-col md:flex-row items-center justify-around w-screen text-center bg-brand-500 md:hidden"
        >
          <div className="flex flex-col gap-10">
            <ul className="flex flex-col gap-10 text-brand-50 text-2xl font-bold">
              <li className="hover:opacity-80">
                <a onClick={() => handleRedirect("home")}>Início</a>
              </li>
              <li className="hover:opacity-80">
                <a onClick={() => handleRedirect("services")}>Serviços</a>
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
        </div> */}

        <SecondaryButton 
          className="hidden md:block"
          onSurface={!(offset == 0)}
          onClick={() => handleRedirect("contact")}
        >
          Agendar consulta
        </SecondaryButton>
      </div>
    </nav>
  );
}