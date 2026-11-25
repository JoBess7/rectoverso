import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Nos services | Clinique Recto Verso",
  description: "Ergothérapie, orthophonie, éducation spécialisée et psychoéducation pour les jeunes de 0 à 18 ans, dans la région de Québec.",
};

const professionalServices = [
  {
    id: "ergotherapie",
    number: "01",
    title: "Ergothérapie",
    summary: "Développement moteur, sensoriel et de l’autonomie dans les activités quotidiennes.",
    examples: "Préalable scolaire, écriture, organisation, retard de développement, trouble de la coordination (TDC), trouble du spectre de l’autisme (TSA), alimentation, etc.",
    illustration: "/assets/illustrations/Abeille.svg",
  },
  {
    id: "orthophonie",
    number: "02",
    title: "Orthophonie",
    summary: "Précurseurs de la communication, développement du langage oral et compréhension en lecture et en écriture.",
    examples: "Retard de langage oral et de la communication, trouble du développement du langage, trouble des sons et de la parole, dyspraxie, dyslexie et dysorthographie, etc.",
    illustration: "/assets/illustrations/Libellule.svg",
  },
  {
    id: "education-specialisee",
    number: "03",
    title: "Éducation spécialisée",
    summary: "Développement global et langagier, comportement et coaching familial.",
    examples: "Accompagnement individualisé et application de plans d’intervention, observations, évaluation des besoins, formations et soutien dans les différents milieux de vie, etc.",
    illustration: "/assets/illustrations/Coccinelle.svg",
  },
  {
    id: "psychoeducation",
    number: "04",
    title: "Psychoéducation",
    summary: "Évaluer le fonctionnement adaptatif et développer les capacités d’adaptation de l’enfant pour soutenir son bien-être.",
    examples: "Capacités d’adaptation et équilibre entre les besoins de l’enfant et les exigences de son environnement.",
    illustration: "/assets/illustrations/Escargot.svg",
  },
];

const groupPrograms = [
  { title: "Camp d’été spécialisé", text: "Chaque été, nous offrons un camp spécialisé de stimulation intensive en ergothérapie. Ce service de réadaptation permet aux enfants nécessitant des interventions de poursuivre leur progression durant la période estivale." },
  { title: "Groupe d’apprentissage du vélo à deux roues", text: "Chaque été, nous offrons des groupes d’apprentissage du vélo pour les enfants. D’une durée de 90 minutes, ces séances permettent aux jeunes, accompagnés d’un parent, d’apprendre aux côtés d’autres enfants avec le soutien et les conseils de nos professionnels." },
  { title: "Groupe d’écriture RectoCalli", text: "Intervention en ergothérapie, sous forme de groupe, offerte sur 8 semaines, permettant aux enfants de 1re et 2e année qui présentent des difficultés dans l’apprentissage de l’écriture de développer leurs compétences graphiques. Un plan d’intervention en ergo est nécessaire ou une première rencontre d’évaluation sera demandée afin de s’assurer que cette offre de service réponde à ses besoins." },
  { title: "Formation sur mesure en ergothérapie", titleContinuation: "pour les équipes scolaires et les centres de la petite enfance", text: "Des formations en ergothérapie conçues sur mesure selon les besoins et la réalité des équipes scolaires et des centres de la petite enfance, pour soutenir leurs interventions et l’accompagnement des enfants dans leurs milieux de vie." },
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
                {service.examples && <p className="professional-examples"><strong>Exemples de besoins</strong><br />{service.examples}</p>}
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
                <div><h3>{program.title}{"titleContinuation" in program && <><br />{program.titleContinuation}</>}</h3>{program.text && <p>{program.text}</p>}</div>
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
