import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';

import logoOnSurfaceUrl from '../../assets/logoOnSurface.svg';

export function Footer() {
  return(
    <footer className="bg-brand-500/50">
      <div className="max-w-6xl mx-auto px-6 py-20 md:flex md:items-center md:justify-between">
        <div>
          <a href="#">
            <img
              className="h-8 mb-6"
              src={logoOnSurfaceUrl} 
              alt="Logo DoctorCare"
            />
          </a>
          
          <div className="mb-8 md:mb-0 text-base md:text-sm text-onSurface">
            <p className="mb-3 md:mb-4">©2021 Beautysalon.</p>
            <p> Todos os direitos reservados.</p>
          </div> 
        </div>

        <ul className="flex gap-8 text-onSurface">
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
    </footer>
  );
}