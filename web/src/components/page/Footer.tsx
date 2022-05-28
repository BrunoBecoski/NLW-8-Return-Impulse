import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';

import logoOnSurfaceUrl from '../../assets/logoOnSurface.svg';

export function Footer() {
  return(
    <footer className="bg-brand-500">
      <div className="max-w-6xl mx-auto px-6">
        <a href="#">
          <img
            className="h-8 mb-6"
            src={logoOnSurfaceUrl} 
            alt="Logo DoctorCare"
          />
        </a>
        
        <p className="mb-8 leading-loose text-brand-50">
          ©2021 Beautysalon. <br/>
          Todos os direitos reservados.
        </p>

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
    </footer>
  );
}