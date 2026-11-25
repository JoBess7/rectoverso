import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link className="footer-brand" href="/" aria-label="Clinique Recto Verso, accueil">
            <Image src="/assets/logos/clinic-logo-white.svg" alt="Clinique Recto Verso" width={188} height={52} unoptimized />
          </Link>
          <p className="footer-tagline">Grandir, bouger,<br /><span>s’épanouir.</span></p>
        </div>
        <div className="footer-info-panel">
          <div className="footer-column">
            <p className="footer-label">Explorer</p>
            <nav className="footer-links" aria-label="Navigation de pied de page">
              <Link href="/services">Services</Link>
              <Link href="/equipe">Équipe</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
          <div className="footer-column footer-contact">
            <p className="footer-label">Nous joindre</p>
            <a className="footer-contact-main" href="tel:+15817003338">(581) 700-3338</a>
            <a className="footer-contact-email" href="mailto:info@cliniquerectoverso.ca">info@cliniquerectoverso.ca</a>
            <a className="footer-appointment" href="https://www.gorendezvous.com/" target="_blank" rel="noreferrer">Prendre rendez-vous</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><span>Québec, Québec</span><span>© Clinique Recto Verso</span></div>
    </footer>
  );
}
