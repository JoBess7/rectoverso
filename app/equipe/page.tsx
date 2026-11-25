import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Notre équipe | Clinique Recto Verso",
  description: "Découvrez les professionnelles et professionnels qui accompagnent les enfants et leur famille à la Clinique Recto Verso.",
};

const professionals = [
  {
    name: "Stéphanie Blouin",
    role: "Coordonnatrice clinique",
    image: "stephanie-blouin.webp",
    bio: "Diplômée en éducation à l’enfance et en éducation spécialisée, Stéphanie a rejoint RectoVerso en 2017. Elle veille à ce que chaque famille vive une expérience chaleureuse dès le premier contact.",
    email: "stephanie.blouin@cliniquerectoverso.ca",
  },
  {
    name: "Laurie Thibeault",
    role: "Ergothérapeute et propriétaire",
    image: "laurie-thibeault.webp",
    bio: "Ergothérapeute depuis 2009 et membre de l’Ordre des ergothérapeutes du Québec, Laurie possède une expérience en pédiatrie dans les secteurs public et privé. Elle dirige aussi la clinique.",
    email: "laurie.thibeault@cliniquerectoverso.ca",
  },
  {
    name: "Stéphanie Bureau",
    role: "Ergothérapeute",
    image: "stephanie-bureau.webp",
    bio: "Titulaire d’une maîtrise en ergothérapie, Stéphanie a acquis de l’expérience en milieu hospitalier, en CLSC et en pratique privée. Elle privilégie une approche ludique et dynamique.",
    email: "stephanie.bureau@cliniquerectoverso.ca",
  },
  {
    name: "Félix Lemelin",
    role: "Ergothérapeute",
    image: "felix-lemelin.webp",
    bio: "Diplômé en ergothérapie en 2023, Félix a commencé sa carrière en soutien à domicile avant de rejoindre l’équipe pédiatrique de RectoVerso en 2024. Son approche s’appuie sur les forces de l’enfant.",
    email: "felix.lemelin@cliniquerectoverso.ca",
  },
  {
    name: "Justine Bessette",
    role: "Ergothérapeute",
    image: "justine-bessette.webp",
    bio: "Diplômée en ergothérapie de l’Université de Sherbrooke, Justine a acquis de l’expérience en clinique privée, en CLSC et dans le milieu communautaire avant de commencer sa pratique en pédiatrie.",
    email: "justine.bessette@cliniquerectoverso.ca",
  },
  {
    name: "Magaly Desrochers",
    role: "Ergothérapeute",
    image: "magaly-desrochers.webp",
    bio: "Diplômée en ergothérapie de l’Université Laval, Magaly a aussi travaillé en éducation à la petite enfance. Elle apporte une compréhension fine du développement de l’enfant et une approche créative.",
    email: "magaly.desrochers@cliniquerectoverso.ca",
  },
  {
    name: "Marie-Eve Dessureault",
    role: "Éducatrice spécialisée, coach familiale et agente en stimulation du langage",
    image: "marie-eve-dessureault.webp",
    bio: "Marie-Eve accompagne les jeunes et les familles qui vivent des défis comportementaux, émotionnels ou langagiers, avec écoute et des stratégies adaptées au quotidien.",
    email: "marie-eve.dessureault@cliniquerectoverso.ca",
  },
  {
    name: "Julie Genest",
    role: "Éducatrice spécialisée, coach familiale et agente en stimulation du langage",
    image: "julie-genest.webp",
    bio: "Éducatrice spécialisée depuis 24 ans, Julie a travaillé en petite enfance et cumulé 15 ans d’expérience en milieu scolaire. Elle mise sur une approche bienveillante et créative.",
    email: "julie.genest@cliniquerectoverso.ca",
  },
  {
    name: "Stéphanie Thibodeau",
    role: "Orthophoniste",
    image: "stephanie-thibodeau.webp",
    bio: "Orthophoniste et membre de son ordre professionnel, Stéphanie a d’abord exercé en ergothérapie avant de compléter une maîtrise en orthophonie. Elle partage son temps entre les secteurs public et privé.",
    email: "stephanie.thibodeau@cliniquerectoverso.ca",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Notre équipe"
        introduction="Des professionnelles et professionnels diplômés, qui prennent le temps d’écouter et de créer un chemin adapté à chaque enfant."
        image="/assets/photos/hero-woman-session.jpg"
        imageAlt="Une intervenante échange avec deux jeunes autour d’une activité à une table"
        eyebrow="Une équipe à l’écoute"
      />
      <main className="inner-page team-page">
        <section className="page-section team-directory">
          <div className="page-section-heading team-directory-heading">
            <p className="section-index">Des personnes, une même attention</p>
            <h2>À ses côtés,<br /><span>à chaque étape.</span></h2>
            <p>Voici celles et ceux qui incarnent notre approche et accompagnent les jeunes dans leurs milieux de vie.</p>
          </div>
          <div className="team-grid">
            {professionals.map((person, index) => (
              <article className="team-card" key={person.name} data-reveal>
                <div className="team-card-photo">
                  <Image src={`/assets/team/${person.image}`} alt={`Portrait de ${person.name}`} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover", objectPosition: "center 28%" }} />
                  <span className="team-card-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="team-card-copy">
                  <h3>{person.name}</h3>
                  <p className="team-card-role">{person.role}</p>
                  <p className="team-card-bio">{person.bio}</p>
                  <Link className="team-card-email" href={`mailto:${person.email}`}>Écrire <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="team-page-cta">
          <p className="eyebrow">Parlons de votre enfant</p>
          <h2>On avance<br /><span>ensemble.</span></h2>
          <Link className="button button-dark" href="/contact">Nous joindre <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
