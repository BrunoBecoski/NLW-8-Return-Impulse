import { List } from 'phosphor-react';

import logoImageUrl from '../assets/logo.svg';

export function NavBar() {
  return (
    <nav 
      className="flex justify-between items-center w-screen h-16 fixed px-6 py-4"
    >
      <a href="#">
        <img src={logoImageUrl} alt="Logo doctor care" />
      </a>

      <button className="text-brand-500">
        <List size={20} weight={'bold'} />
      </button>
    </nav>
  );
}