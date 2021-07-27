import Link from "next/link";
import { useSelector } from "react-redux";

import FooterCard from "./footerCard";
import SocialNetworks from "./socialNetworks";

const Footer = () => {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  return (
    <footer>
      <div className='footer'>
        <div className='footer-content'>
          <FooterCard title='Nous Rencontrer'>
            <p>Mazz Kitchen Studios</p>
            <p>11B Chemin des Têts</p>
            <p>74960 Annecy</p>
            <SocialNetworks width='35rem' height='35rem' />
          </FooterCard>
          <FooterCard title='Mazz Kitchen'>
            <ul>
              <Link href='#'>
                <a>
                  <li>À propos de nous</li>
                </a>
              </Link>
              <Link href='#'>
                <a>
                  <li>Presse</li>
                </a>
              </Link>
              <Link href='/posts'>
                <a>
                  <li>Actualités</li>
                </a>
              </Link>
              <Link href='#'>
                <a>
                  <li>CGU &amp; CGV</li>
                </a>
              </Link>
            </ul>
          </FooterCard>
          <FooterCard title='Client'>
            <ul>
              <Link href='/tarifs'>
                <a>
                  <li>Offres &amp; politique tarifaire</li>
                </a>
              </Link>
              <Link href='/quote'>
                <a>
                  <li>Votre devis personnalisé</li>
                </a>
              </Link>
            </ul>
          </FooterCard>
          <FooterCard title='Découvrir'>
            <ul>
              <Link href='/staff#team'>
                <a>
                  <li>Notre équipe</li>
                </a>
              </Link>
              <Link href='#'>
                <a>
                  <li>Retours d'expériences</li>
                </a>
              </Link>
            </ul>
          </FooterCard>
          {!isAuthenticated && (
            <FooterCard title='Méta'>
              <ul>
                <Link href='/login'>
                  <a>
                    <li>Connexion</li>
                  </a>
                </Link>
              </ul>
            </FooterCard>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
