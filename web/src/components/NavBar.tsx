import { useEffect, useRef, useState } from 'react';
import { FacebookLogo, InstagramLogo, List, X, YoutubeLogo } from 'phosphor-react';

import logoImageUrl from '../assets/logo.svg';
import logoOnSurfaceUrl from '../assets/logoOnSurface.svg';

export function NavBar() {
 const [offset, setOffset] = useState(0);
 const [menuIsOpen, setMenuIsOpen] = useState(false);
 const navRef = useRef<HTMLDivElement>(null);

  function setScroll() {
    setOffset(window.scrollY);
  };
  
  useEffect(() => {
    if(offset > 0) {
      navRef.current?.classList.add("bg-brand-500");
      navRef.current?.getElementsByClassName("button-list")[0].classList.add("text-brand-50");
      
    } else {
      navRef.current?.classList.remove("bg-brand-500");
      navRef.current?.getElementsByClassName("button-list")[0].classList.remove("text-brand-50");
    }
  }, [offset])

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef} 
      className="flex justify-between items-center w-full fixed px-6 py-4"
    >
      <a href="#">
        <img src={offset > 0 ? logoOnSurfaceUrl : logoImageUrl } alt="Logo DoctorCare" />
      </a>

      <button onClick={() => setMenuIsOpen(!menuIsOpen)}className="button-list text-brand-500">
        {
          menuIsOpen
          ? <X size={20} weight={'bold'} />
          : <List size={20} weight={'bold'} />
        }
      </button>
    </nav>
  );
}