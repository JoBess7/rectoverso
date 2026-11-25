import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/" aria-label="Clinique Recto Verso, accueil">
        <Image src="/assets/logos/clinic-logo-sarcelle.svg" alt="Clinique Recto Verso" width={188} height={52} unoptimized />
      </Link>
      <p className="footer-tagline">Grandir, bouger,<br />s’épanouir.</p>
      <nav className="footer-links" aria-label="Navigation de pied de page">
        <Link href="/services">Services</Link>
        <Link href="/equipe">Équipe</Link>
        <Link href="/contact">Contact</Link>
        <a href="https://www.gorendezvous.com/" target="_blank" rel="noreferrer">Prendre rendez-vous ↗</a>
      </nav>
      <div className="footer-bottom"><span>Québec, QC</span><span>© Clinique Recto Verso</span><a href="https://www.cliniquerectoverso.ca/">Site actuel ↗</a></div>
    </footer>
  );
}
