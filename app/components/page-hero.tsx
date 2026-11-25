import Image from "next/image";
import { SiteHeader } from "./site-header";

type PageHeroProps = {
  title: string;
  introduction: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
};

export function PageHero({ title, introduction, image, imageAlt, eyebrow = "Clinique Recto Verso" }: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <Image className="page-hero-image" src={image} alt={imageAlt} fill priority sizes="100vw" />
      <div className="page-hero-shade" aria-hidden="true" />
      <SiteHeader />
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <p className="page-hero-intro">{introduction}</p>
      </div>
    </section>
  );
}
