import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Nos services | Clinique Recto Verso",
  description: "Ergothérapie, orthophonie et éducation spécialisée pour les jeunes de 0 à 18 ans, dans la région de Québec.",
};

const professionalServices = [
  {
    id: "ergotherapie",
    number: "01",
    title: "Ergothérapie",
    summary: "Développer les habiletés motrices, sensorielles et l’autonomie dans les activités du quotidien.",
    examples: "Préalable scolaire, écriture, organisation, retard de développement, coordination, alimentation et besoins liés au TSA.",
    illustration: "/assets/illustrations/Abeille.svg",
  },
  {
    id: "orthophonie",
    number: "02",
    title: "Orthophonie",
    summary: "Soutenir les précurseurs de la communication, le langage oral ainsi que la compréhension en lecture et en écriture.",
    examples: "Retard de langage ou de communication, sons et parole, développement du langage, dyspraxie, dyslexie et dysorthographie.",
    illustration: "/assets/illustrations/Libellule.svg",
  },
  {
    id: "education-specialisee",
    number: "03",
    title: "Éducation spécialisée",
    summary: "Accompagner le développement global et langagier, le comportement et la vie familiale.",
    examples: "Soutien individualisé, application de plans d’intervention, observation, évaluation des besoins et accompagnement dans les milieux de vie.",
    illustration: "/assets/illustrations/Coccinelle.svg",
  },
  {
    id: "psychoeducation",
    number: "04",
    title: "Psychoéducation",
    summary: "Accompagner l’enfant en évaluant son fonctionnement adaptatif, en développant ses capacités d’adaptation afin de soutenir son bien-être et de trouver un équilibre entre ses besoins et les exigences de son environnement.",
    examples: "Soutien au développement des capacités d’adaptation et au bien-être de l’enfant.",
    illustration: "/assets/illustrations/Escargot.svg",
  },
];

const groupPrograms = [
  { title: "Camp d’été spécialisé", text: "Un camp de stimulation intensive en ergothérapie pour soutenir la progression des enfants pendant l’été." },
  { title: "Apprentissage du vélo", text: "Des séances de groupe de 90 minutes où les enfants apprennent à rouler à deux roues avec le soutien d’un parent et de professionnels." },
  { title: "Groupe d’écriture RectoCalli", text: "Un programme d’ergothérapie de huit semaines pour développer les compétences graphiques des enfants de 1re et 2e année." },
  { title: "Formations sur mesure", text: "Des formations en ergothérapie pour les équipes scolaires et les centres de la petite enfance." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Nos services"
        introduction="Des thérapeutes dévoués qui prennent le temps. Des séances adaptées au rythme de votre enfant. Un accompagnement qui fait la différence."
        image="/assets/photos/therapy-session-writing.webp"
        imageAlt="Une intervenante accompagne un enfant dans une activité d’apprentissage"
        eyebrow="Grandir, bouger, s’épanouir"
      />
      <main className="inner-page">
        <section className="page-section professional-section">
          <div className="page-section-heading">
            <p className="section-index">Services professionnels</p>
            <h2>Un soutien adapté<br /><span>à son quotidien.</span></h2>
          </div>
          <div className="professional-grid">
            {professionalServices.map((service) => (
              <article className="professional-card" id={service.id} key={service.id}>
                <div className="professional-card-top"><span>{service.number}</span><Image src={service.illustration} alt="" aria-hidden="true" width={58} height={58} unoptimized /></div>
                <h3>{service.title}</h3>
                <p className="professional-summary">{service.summary}</p>
                <p className="professional-examples"><strong>Exemples de besoins</strong><br />{service.examples}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="groups-section" id="groupes">
          <div className="groups-intro">
            <p className="section-index">Pour apprendre ensemble</p>
            <h2>Des groupes<br /><span>qui font grandir.</span></h2>
            <p>Des activités en petit groupe pour apprendre, pratiquer et progresser dans un environnement encourageant.</p>
            <Link className="text-link" href="/contact">Nous poser une question <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="group-list">
            {groupPrograms.map((program, index) => (
              <article className="group-row" key={program.title}>
                <span className="group-number">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{program.title}</h3><p>{program.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="service-delivery page-section">
          <div className="delivery-image-wrap">
            <Image src="/assets/photos/therapy-session-coaching.webp" alt="Une intervenante échange avec une enfant autour d’une activité" fill sizes="(max-width: 800px) 100vw, 48vw" />
          </div>
          <div className="delivery-copy">
            <p className="section-index">Dans ses milieux de vie</p>
            <h2>À la clinique,<br /><span>et là où il grandit.</span></h2>
            <p>Les services sont offerts en clinique, à domicile, en garderie ou à l’école dans la grande région de Québec. Les interventions dans les milieux de vie sont faites avec l’autorisation préalable des personnes concernées.</p>
            <Link className="button button-dark" href="/contact">Nous joindre <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
