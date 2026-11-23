import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const focusAreas = [
  { number: "01", title: "Développement", text: "Motricité, coordination et autonomie dans les activités de tous les jours." },
  { number: "02", title: "Langage & communication", text: "Expression, parole et compréhension orale ou écrite." },
  { number: "03", title: "Apprentissage", text: "Écriture, compétences scolaires et confiance pour apprendre." },
  { number: "04", title: "Sensoriel & bien-être", text: "Un accompagnement adapté aux besoins et au quotidien de chaque jeune." },
];

const services = [
  { title: "Ergothérapie", illustration: "/assets/illustrations/Abeille.svg" },
  { title: "Orthophonie", illustration: "/assets/illustrations/Libellule.svg" },
  { title: "Éducation spécialisée", illustration: "/assets/illustrations/Coccinelle.svg" },
  { title: "Groupes et activités", illustration: "/assets/illustrations/Chenille.svg" },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <SiteHeader />
      <main id="contenu">
        <section className="hero" aria-labelledby="hero-title">
          <figure className="hero-image">
            <Image
              src="/assets/photos/hero-woman-session.jpg"
              alt="Une intervenante échange avec deux jeunes autour d’une activité à une table"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <h1 className="hero-wordmark" id="hero-title">RectoVerso</h1>
          </figure>
          <div className="hero-intro">
            <p className="hero-kicker">Clinique d’ergothérapie<br />pédiatrique à domicile</p>
            <div className="hero-intro-copy">
              <p>Nous aidons chaque enfant de 0 à 18 ans à développer ses habiletés motrices, sensorielles et sociales pour qu’il s’épanouisse pleinement dans son quotidien.</p>
            </div>
          </div>
        </section>

        <section className="focus-band section-wrap">
          <div className="section-index" data-reveal>01 <span>—</span> Nos champs d’action</div>
          <h2 data-reveal>Des petits pas qui<br />font <span>une différence.</span></h2>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article key={area.number} data-reveal>
                <span className="card-number">{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><span className="card-symbol" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <p className="focus-footnote" data-reveal>Les besoins de chaque enfant sont uniques. Parlons-en ensemble.</p>
        </section>

        <section className="services-teaser section-wrap" id="services">
          <div className="section-index" data-reveal>02 <span>—</span> Nos services</div>
          <div className="teaser-row" data-reveal><h2>Un accompagnement<br /><span>qui lui ressemble.</span></h2><p>Des professionnels dévoués, des séances adaptées et plusieurs façons de vous accompagner — en clinique, à domicile, à l’école ou en garderie.</p></div>
          <div className="service-list">{services.map((service, index) => <Link href="#contact" key={service.title} data-reveal><span className="service-number">{String(index + 1).padStart(2, "0")}</span><strong>{service.title}</strong><Image className="service-illustration" src={service.illustration} alt="" aria-hidden="true" width={68} height={68} unoptimized /><span className="service-arrow" aria-hidden="true">↗</span></Link>)}</div>
        </section>

        <section className="team-band" id="approche">
          <div className="team-band-copy">
            <div className="section-index" data-reveal>03 <span>—</span> Notre approche</div>
            <div className="team-band-heading" data-reveal><h2>Chaque enfant avance<br /><span>à sa façon.</span></h2></div>
            <div className="team-band-detail" data-reveal>
              <p>Nous soutenons les jeunes dans les défis du quotidien, avec une approche bienveillante et des interventions adaptées à leur réalité.</p>
              <Link className="text-link" href="#contact">Une équipe à votre écoute <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <Image className="team-band-image" id="equipe" data-reveal src="/assets/photos/sensory-play.webp" alt="Une enfant explore du matériel sensoriel accompagnée par une intervenante" width={1200} height={800} sizes="(max-width: 700px) 100vw, 50vw" />
        </section>

        <section className="closing" id="contact">
          <Image className="closing-illustration" src="/assets/illustrations/Soleil.svg" alt="" width={90} height={90} aria-hidden="true" unoptimized />
          <p className="eyebrow" data-reveal>On est là pour vous</p><h2 data-reveal>Un premier pas<br /><span>ensemble.</span></h2>
          <p data-reveal>Vous avez des questions ou souhaitez discuter des besoins de votre enfant?</p>
          <a className="button button-light" data-reveal href="mailto:info@cliniquerectoverso.ca">Nous joindre <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
