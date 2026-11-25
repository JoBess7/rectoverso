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
    image: "stephanie-blouin.jpg",
    bio: "Diplômée en éducation à l’enfance et en éducation spécialisée, Stéphanie a rejoint RectoVerso en 2017. Elle veille à ce que chaque famille vive une expérience chaleureuse dès le premier contact.",
    fullBio: "Diplômée en éducation à l’enfance (2008) puis en éducation spécialisée (2017), j’ai toujours eu une véritable passion pour l’accompagnement de la clientèle pédiatrique. J’ai rejoint l’équipe de RectoVerso en 2017 à titre d’éducatrice spécialisée, principalement dans les milieux de garde, où j’offrais un soutien aux éducatrices accueillant des enfants ayant des défis particuliers. Au fil des années, mon rôle a évolué : mon chapeau d’intervenante s’est progressivement transformé en celui de coordonnatrice clinique. Depuis 2022, j’accompagne notre équipe sur le plan administratif afin que chaque famille vive une expérience positive, chaleureuse et rassurante avec nous, et ce, dès le tout premier contact téléphonique.",
    email: "stephanie.blouin@cliniquerectoverso.ca",
  },
  {
    name: "Laurie Thibeault",
    role: "Ergothérapeute et propriétaire",
    image: "laurie-thibeault.jpg",
    bio: "Ergothérapeute depuis 2009 et membre de l’Ordre des ergothérapeutes du Québec, Laurie possède une expérience en pédiatrie dans les secteurs public et privé. Elle dirige aussi la clinique.",
    fullBio: "Depuis l’obtention de mon diplôme de l’Université Laval en décembre 2009, je suis ergothérapeute et membre de l’Ordre des ergothérapeutes du Québec. J’ai eu l’occasion de travailler autant dans le secteur public que dans le secteur privé, principalement en pédiatrie. Depuis aussi loin que je me souvienne, les enfants occupent une place privilégiée dans ma vie; ils ont toujours été pour moi une véritable passion. Je suis d’ailleurs choyée d’être la maman de quatre merveilleux enfants. Aujourd’hui, j’ai la chance d’exercer le plus beau métier du monde et d’en faire profiter les vôtres. J’ai également complété une maîtrise en administration des affaires (MBA), une formation qui me permet de diriger la Clinique avec rigueur et bienveillance, tout en offrant un soutien optimal à notre équipe. Responsable de la protection des renseignements personnels.",
    email: "laurie.thibeault@cliniquerectoverso.ca",
  },
  {
    name: "Stéphanie Bureau",
    role: "Ergothérapeute",
    image: "stephanie-bureau.webp",
    bio: "Titulaire d’une maîtrise en ergothérapie, Stéphanie a acquis de l’expérience en milieu hospitalier, en CLSC et en pratique privée. Elle privilégie une approche ludique et dynamique.",
    fullBio: "Je suis titulaire d’une maîtrise en ergothérapie de l’Université Laval, au cours de laquelle j’ai acquis une expérience diversifiée grâce à des stages en milieu hospitalier, en CLSC ainsi qu’en pratique privée auprès de clientèles variées. Depuis l’obtention de mon diplôme en 2022, j’ai la chance d’exercer ma profession au sein de l’équipe de Recto Verso en pédiatrie, une clientèle qui me passionne depuis toujours! Mes expériences de travail antérieures — que ce soit en camp d’été ou comme entraîneure en vélo de montagne — m’ont permis de développer une approche ludique, dynamique et axée sur le plaisir. Le développement de l’enfant me tient profondément à cœur, d’autant plus que je suis également maman d’une magnifique petite fille. C’est donc avec sensibilité et enthousiasme que j’accompagnerai vos enfants afin de les aider à déployer tout leur potentiel! Actuellement en congé de maternité, elle profite pleinement de précieux moments avec sa petite fille. Elle retrouvera l’équipe et les familles de la Clinique avec enthousiasme à son retour.",
    email: "stephanie.bureau@cliniquerectoverso.ca",
  },
  {
    name: "Félix Lemelin",
    role: "Ergothérapeute",
    image: "felix-lemelin.jpg",
    bio: "Diplômé en ergothérapie en 2023, Félix a commencé sa carrière en soutien à domicile avant de rejoindre l’équipe pédiatrique de RectoVerso en 2024. Son approche s’appuie sur les forces de l’enfant.",
    fullBio: "J’ai complété ma maîtrise en ergothérapie à l’Université Laval en 2023 et je suis membre de l’Ordre des ergothérapeutes du Québec depuis le début de l’année 2024. J’ai eu le privilège de débuter ma carrière en soutien à domicile, auprès d’une clientèle en déficience physique, une expérience riche en apprentissages et en humanité. En avril 2024, j’ai eu la chance de rejoindre la magnifique équipe de Recto Verso, où j’ai désormais le plaisir de travailler quotidiennement auprès d’une clientèle pédiatrique. Mes diverses expériences de vie — notamment comme gestionnaire de camp de jour et comme chanteur — m’ont permis de développer un sens aigu de l’observation, une grande créativité, une organisation solide ainsi qu’une approche centrée sur les forces de l’enfant. Passionné par l’ergothérapie, je serais honoré de collaborer avec vous et votre enfant afin de l’aider à développer son plein potentiel et à s’épanouir dans son quotidien.",
    email: "felix.lemelin@cliniquerectoverso.ca",
  },
  {
    name: "Justine Bessette",
    role: "Ergothérapeute",
    image: "justine-bessette.jpg",
    bio: "Diplômée en ergothérapie de l’Université de Sherbrooke, Justine a acquis de l’expérience en clinique privée, en CLSC et dans le milieu communautaire avant de commencer sa pratique en pédiatrie.",
    fullBio: "J’ai complété ma maîtrise en ergothérapie à l’Université de Sherbrooke en mai 2025. Tout au long de ma formation, j’ai eu l’occasion d’acquérir de l’expérience dans divers milieux — en clinique privée, en CLSC et au sein du milieu communautaire. Ces expériences m’ont permis d’intervenir auprès d’une clientèle variée et d’affiner une approche professionnelle sensible, réfléchie et adaptée aux besoins uniques de chaque enfant que j’accompagne. Depuis ma graduation, j’ai le privilège de m’être jointe à la formidable équipe de RectoVerso et d’y débuter ma pratique en pédiatrie, un domaine qui me passionne profondément. Bien avant d’être ergothérapeute, le travail auprès des enfants a toujours occupé une place importante dans ma vie. Que ce soit comme au pair, animatrice de camp de jour, accompagnatrice en garderie ou assistante de recherche, chacune de ces expériences a contribué à façonner ma créativité, ma rigueur et mon approche personnalisée auprès de chaque enfant.",
    email: "justine.bessette@cliniquerectoverso.ca",
  },
  {
    name: "Magaly Desrochers",
    role: "Ergothérapeute",
    image: "magaly-desrochers.jpg",
    bio: "Diplômée en ergothérapie de l’Université Laval, Magaly a aussi travaillé en éducation à la petite enfance. Elle apporte une compréhension fine du développement de l’enfant et une approche créative.",
    fullBio: "J’ai récemment complété ma maîtrise en ergothérapie à l’Université Laval, en novembre 2025, à la suite de mon stage final réalisé à la Clinique RectoVerso. Mon parcours académique m’a également permis d’effectuer des stages variés, notamment en centre hospitalier et en centre de réadaptation physique, enrichissant ainsi ma vision globale du continuum de soins. C’est donc avec beaucoup d’enthousiasme que je poursuis maintenant mon cheminement professionnel au sein de la clinique en tant qu’ergothérapeute. Au cours de mes études, j’ai aussi travaillé comme éducatrice à la petite enfance, une expérience qui a profondément enrichi ma pratique. Ce rôle m’a permis de développer une compréhension fine du développement de l’enfant et de bâtir une approche empreinte de patience, d’écoute et de créativité. Je suis ravie de me joindre à l’équipe et impatiente de mettre à profit mes apprentissages, mon énergie et ma passion auprès de vos enfants et de votre famille.",
    email: "magaly.desrochers@cliniquerectoverso.ca",
  },
  {
    name: "Marie-Eve Dessureault",
    role: "Éducatrice spécialisée, coach familiale et agente en stimulation du langage",
    image: "marie-eve-dessureault.jpg",
    bio: "Marie-Eve accompagne les jeunes et les familles qui vivent des défis comportementaux, émotionnels ou langagiers, avec écoute et des stratégies adaptées au quotidien.",
    fullBio: "Éducatrice spécialisée, coach familiale et agente en stimulation du langage à la Clinique RectoVerso, j’accompagne les familles ainsi que les jeunes qui vivent des défis comportementaux, émotionnels ou langagiers. J’offre un accompagnement individualisé aux enfants et aux adolescents, toujours en collaboration étroite avec leur famille. J’ai à cœur de soutenir les parents dans leurs défis éducatifs en misant sur l’écoute, l’empathie et des stratégies concrètes qui favorisent l’harmonie familiale. J’interviens également en stimulation du langage au moyen d’activités interactives, développées en partenariat avec des spécialistes, afin de soutenir le développement global de l’enfant. Détentrice de diplômes en éducation spécialisée et en coaching familial, je poursuis régulièrement des formations continues afin d’assurer des pratiques actuelles, efficaces et bienveillantes. Au plaisir de travailler avec vous et d’accompagner votre famille avec douceur et professionnalisme!",
    email: "marie-eve.dessureault@cliniquerectoverso.ca",
  },
  {
    name: "Julie Genest",
    role: "Éducatrice spécialisée, coach familiale et agente en stimulation du langage",
    image: "julie-genest.jpg",
    bio: "Éducatrice spécialisée depuis 24 ans, Julie a travaillé en petite enfance et cumulé 15 ans d’expérience en milieu scolaire. Elle mise sur une approche bienveillante et créative.",
    fullBio: "Je suis éducatrice spécialisée depuis maintenant 24 ans. Au début de ma carrière, j’ai travaillé en petite enfance auprès d’enfants présentant des besoins particuliers dans leur développement. Souhaitant approfondir mes compétences, j’ai ensuite complété une attestation d’études collégiales en développement du langage. Après plusieurs années, j’ai élargi mon champ d’intervention en travaillant avec des enfants plus âgés, accumulant 15 ans d’expérience en milieu scolaire auprès d’une clientèle variée. Tout au long de mon parcours, j’ai suivi de nombreuses formations qui m’ont permis de renforcer mes connaissances et d’enrichir mes pratiques. J’ai à cœur le développement de chaque enfant et j’adopte une approche à la fois bienveillante et créative. L’an dernier, j’ai eu le bonheur de rejoindre la grande famille de Recto Verso, où je suis ravie de pouvoir contribuer au bien-être et à l’épanouissement de vos enfants. Au plaisir de vous rencontrer et de collaborer avec vous!",
    email: "julie.genest@cliniquerectoverso.ca",
  },
  {
    name: "Stéphanie Thibodeau",
    role: "Orthophoniste",
    image: "stephanie-thibodeau.jpg",
    bio: "Orthophoniste et membre de son ordre professionnel, Stéphanie a d’abord exercé en ergothérapie avant de compléter une maîtrise en orthophonie. Elle partage son temps entre les secteurs public et privé.",
    fullBio: "Permettez-moi de vous présenter mon parcours jusqu’à la Clinique RectoVerso. Diplômée en ergothérapie de l’Université Laval en 2007, j’ai rapidement intégré le secteur public, où j’ai exercé auprès d’enfants. Au cours de mes cinq premières années de pratique, j’ai découvert une véritable passion pour le domaine langagier. C’est ce qui m’a motivée à retourner à l’université en 2013 pour compléter une maîtrise en orthophonie. Aujourd’hui, je suis membre de l’Ordre des orthophonistes et audiologistes du Québec et partage mon temps entre les secteurs public et privé. Au fil des années, j’ai acquis une solide expérience auprès de clientèles présentant un retard de développement, un retard ou trouble de langage, des besoins en investigation pour TSA et des déficiences auditives. Je suis donc heureuse de mettre mes compétences et ma passion au service de l’orthophonie pédiatrique, afin d’accompagner vos enfants dans leur développement et leur épanouissement.",
    email: "stephanie.thibodeau@cliniquerectoverso.ca",
  },
  {
    name: "Sophie Mercier",
    role: "Ergothérapeute",
    image: "sophie-mercier.jpg",
    bio: "Après une première expérience à Recto Verso comme aide ergothérapeute, Sophie revient avec près de quatre ans d’expérience auprès d’enfants aux profils variés. Elle privilégie une approche douce, ludique et centrée sur les forces de chaque enfant.",
    fullBio: "Je suis titulaire d’une maîtrise en ergothérapie de l’Université Laval, complétée en 2022 après un stage final en pédopsychiatrie. Mon parcours avec Recto Verso a débuté en 2021, alors que j’y travaillais comme aide ergothérapeute dans un rôle qui venait tout juste d’être mis en place au sein de la clinique. C’est cette expérience qui a confirmé mon désir de travailler auprès des enfants. Après l’obtention de mon diplôme, j’ai eu la chance d’exercer près de quatre ans dans la région de Charlevoix. Ce passage m’a permis d’accompagner des enfants aux profils variés, notamment en déficience motrice, déficience intellectuelle et trouble du spectre de l’autisme, et d’enrichir ma pratique grâce à des échanges précieux avec les enfants et leur famille. Curieuse, créative et motivée par les nouveaux défis, j’accorde une grande importance à une approche douce, ludique et centrée sur les forces et les intérêts de chaque enfant. C’est avec beaucoup d’enthousiasme que je retrouve aujourd’hui l’équipe de Recto Verso, afin de collaborer avec vous et votre enfant pour soutenir son développement et son épanouissement jour après jour.",
    email: "sophie.mercier@cliniquerectoverso.ca",
  },
  {
    name: "Jade Sheehy",
    role: "Psychoéducatrice",
    image: "jade-sheehy.jpg",
    bio: "Jade a complété sa maîtrise en psychoéducation à l’UQTR, campus de Québec. Son expérience en milieu scolaire et communautaire nourrit une approche humaine, bienveillante et créative, attentive au rythme de chaque famille.",
    fullBio: "J’ai complété ma maîtrise en psychoéducation à l’Université du Québec à Trois-Rivières (campus de Québec) en 2026. Au cours de mon parcours, tant dans mes milieux de travail que lors de mes stages, j’ai développé une expérience significative auprès des enfants, des adolescents et des adultes. J’ai évolué dans divers milieux, notamment en milieu scolaire (au primaire comme au secondaire) et dans les camps de jour, mais principalement dans le secteur communautaire auprès de clientèles marginalisées ou vivant des réalités complexes, quel que soit leur âge. Le milieu communautaire a ancré ma pratique dans des valeurs de bienveillance, d’autodétermination et d’engagement. Ensemble, ces expériences ont façonné une approche humaine, sensible au bagage de chacun et attentive au rythme de la personne et de sa famille. Grande passionnée d’art et titulaire d’une formation collégiale dans ce domaine, j’intègre la créativité au cœur de mes interventions afin d’offrir un suivi dynamique, coloré et adapté aux besoins de chacun. C’est avec enthousiasme que je m’engage à vous accompagner pour vous aider à surmonter les défis du quotidien et à favoriser votre bien-être ou celui de votre enfant!",
    email: "jade.sheehy@cliniquerectoverso.ca",
  },
  {
    name: "Béatrice Senneville",
    role: "Orthophoniste",
    image: "beatrice-senneville.jpg",
    bio: "Titulaire d’une maîtrise en orthophonie et d’un baccalauréat en psychologie, Béatrice s’intéresse au développement du langage et aux stratégies qui aident les jeunes à communiquer et à réussir leurs apprentissages.",
    fullBio: "J’ai complété ma maîtrise en orthophonie à l’Université Laval en août 2026 après un stage final auprès d’une clientèle pédiatrique. Également titulaire d’un baccalauréat en psychologie à l’Université du Québec à Trois-Rivières, je suis depuis longtemps passionnée par l’enfant et son développement. En me spécialisant dans le développement du langage, j’espère aider les enfants et les adolescents à s’épanouir pleinement dans toutes les sphères de leur vie en leur donnant les outils nécessaires pour développer des stratégies les aidant à communiquer et à réussir leurs apprentissages. J’ai eu le plaisir de travailler comme éducatrice en garderie pendant mon parcours scolaire. Cette expérience m’a permis de lier la théorie à ce que j’observais chez des enfants et de comprendre le développement du langage dans un contexte de développement global. J’en ressors également avec une connaissance de la réalité des éducatrices, ce qui me permet de mieux les épauler dans mon rôle d’orthophoniste. Étant créative dans la vie de tous les jours (peinture, dessin, tricot), j’espère apporter cette créativité ainsi que ma patience dans mon approche en orthophonie. C’est avec plaisir que je me joins à l’équipe de RectoVerso pour commencer mon parcours en tant qu’orthophoniste!",
    email: "beatrice.senneville@cliniquerectoverso.ca",
  },
];

const displayOrder = [
  "Stéphanie Blouin",
  "Laurie Thibeault",
  "Stéphanie Bureau",
  "Marie-Eve Dessureault",
  "Julie Genest",
  "Stéphanie Thibodeau",
  "Justine Bessette",
  "Magaly Desrochers",
  "Félix Lemelin",
  "Sophie Mercier",
  "Béatrice Senneville",
  "Jade Sheehy",
];

const orderedProfessionals = displayOrder.map((name) => professionals.find((person) => person.name === name)!);

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
            {orderedProfessionals.map((person, index) => (
              <article className="team-card" key={person.name} data-reveal>
                <div className="team-card-photo">
                  <Image src={`/assets/team/${person.image}`} alt={`Portrait de ${person.name}`} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover", objectPosition: "center 28%" }} />
                  <span className="team-card-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="team-card-copy">
                  <h3>{person.name}</h3>
                  <p className="team-card-role">{person.role}</p>
                  <p className="team-card-bio">{person.bio}</p>
                  {person.fullBio && (
                    <details className="team-card-details">
                      <summary><span className="team-card-details-closed">Lire la bio complète</span><span className="team-card-details-open">Réduire la bio</span></summary>
                      <p>{person.fullBio}</p>
                    </details>
                  )}
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
