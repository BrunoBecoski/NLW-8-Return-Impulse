import { useEffect, useRef, useState } from 'react';
import { FacebookLogo, InstagramLogo, List, X, YoutubeLogo } from 'phosphor-react';

import logoImageUrl from '../assets/logo.svg';
import logoOnSurfaceUrl from '../assets/logoOnSurface.svg';
import { Button } from './Button';

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
    <nav className="flex flex-col fixed">
      <div ref={divRef} className="flex justify-between items-center w-screen px-6 py-4">
        <a href="#">
          <img 
            src={offset > 0 || menuIsOpen ? logoOnSurfaceUrl : logoImageUrl } 
            alt="Logo DoctorCare"
          />
        </a>

        <button onClick={handleButtonList} className="button-list text-brand-500">
          {
            menuIsOpen
            ? <X size={20} weight={'bold'} />
            : <List size={20} weight={'bold'} />
          }
        </button>
      </div>

      {
        menuIsOpen &&
        <div 
          style={{ height: `calc(${window.innerHeight}px - ${divRef.current?.clientHeight}px)` }}
          className="flex flex-col items-center justify-around w-screen text-center bg-brand-500"
        >
          <div className="flex flex-col gap-10">
            <ul className="flex flex-col gap-10 text-brand-50 text-2xl font-bold">
              <li className="hover:opacity-80"><a href="#">Início</a></li>
              <li className="hover:opacity-80"><a href="#">Serviços</a></li>
              <li className="hover:opacity-80"><a href="#">Sobre</a></li>
              <li className="hover:opacity-80"><a href="#">Depoimentos</a></li>
            </ul>

            <Button onSurface>
              Agende sua consulta
            </Button>
          </div>

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
  );
}