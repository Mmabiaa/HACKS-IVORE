import { Breadcrumbs } from "@/components/common";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div>
          <Breadcrumbs current={eyebrow} />
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
        </div>
        {image && (
          <img
            src={image}
            alt="Heavy equipment operating in a demanding field environment"
            width="1600"
            height="1000"
          />
        )}
      </div>
    </section>
  );
}
