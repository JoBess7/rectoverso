import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../components/contact-form";
import { PageHero } from "../components/page-hero";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Nous joindre | Clinique Recto Verso",
  description: "Contactez la Clinique Recto Verso à Québec pour en savoir plus sur nos services en pédiatrie.",
};

const locations = [
  {
    number: "01",
    name: "Clinique RectoVerso",
    address: "1170, boulevard Lebourgneuf, local 208",
    city: "Québec (Québec)",
    map: "https://www.google.com/maps/search/?api=1&query=1170%20boulevard%20Lebourgneuf%20local%20208%20Qu%C3%A9bec%20QC",
  },
  {
    number: "02",
    name: "Clinique Focus — partenaire",
    address: "3679, rue de l’Hêtrière, local 120",
    city: "Saint-Augustin-de-Desmaures (Québec)",
    map: "https://www.google.com/maps/search/?api=1&query=3679%20rue%20de%20l%27H%C3%AAtri%C3%A8re%20local%20120%20Saint-Augustin-de-Desmaures%20QC",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Nous joindre"
        introduction="Une question sur nos services ou sur la première étape? Notre équipe est là pour vous répondre."
        image="/assets/photos/therapy-session-coaching.webp"
        imageAlt="Une intervenante accompagne une enfant lors d’une activité à la clinique"
        eyebrow="On est là pour vous"
      />
      <main className="inner-page contact-page">
        <section className="contact-overview page-section">
          <div className="contact-overview-intro">
            <p className="section-index">Nous joindre</p>
            <h2>Commençons<br /><span>la conversation.</span></h2>
            <p>Appelez-nous ou écrivez-nous pour obtenir de l’information sur la clinique et les services offerts.</p>
          </div>
          <div className="contact-methods">
            <a className="contact-method" href="tel:+15817003338">
              <span className="contact-method-label">Appelez-nous</span>
              <strong>(581) 700-3338</strong>
              <span className="contact-method-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="contact-method" href="mailto:info@cliniquerectoverso.ca">
              <span className="contact-method-label">Courriel</span>
              <strong>info@cliniquerectoverso.ca</strong>
              <span className="contact-method-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="locations-section">
          <div className="locations-heading">
            <p className="section-index">Où nous trouver?</p>
            <h2>À Québec<br /><span>et dans les environs.</span></h2>
            <p>Nos services sont aussi offerts à domicile, en garderie ou à l’école dans la grande région de Québec, avec l’autorisation préalable des milieux concernés.</p>
          </div>
          <div className="location-list">
            {locations.map((location) => (
              <article className="location-card" key={location.number}>
                <span className="location-number">{location.number}</span>
                <div><h3>{location.name}</h3><p>{location.address}<br />{location.city}</p></div>
                <Link href={location.map} target="_blank" rel="noreferrer" aria-label={`Voir ${location.name} sur la carte`}>Carte <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-form-section">
          <ContactForm />
          <aside className="contact-extra">
            <p className="section-index">Autres demandes</p>
            <h2>Vous souhaitez<br /><span>vous joindre à nous?</span></h2>
            <p>Faites-nous parvenir votre curriculum vitæ par courriel.</p>
            <a className="text-link" href="mailto:info@cliniquerectoverso.ca?subject=Candidature%20spontan%C3%A9e">Envoyer mon CV <span aria-hidden="true">↗</span></a>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
