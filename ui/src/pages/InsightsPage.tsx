import { ArrowLink } from "@/components/common";
import { CtaBand, PageHero } from "@/sections/shared";
import { images } from "@/data/site-data";
import { articles } from "@/data/insights-data";

export function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical perspectives for demanding operations."
        intro="A future editorial resource covering equipment, maintenance, drilling, field operations, safety and industry developments."
        image={images.drillingImage}
      />
      <section className="section">
        <div className="shell insights-grid">
          {articles.map(([cat, title]) => (
            <article className="insight" key={title}>
              <span className="tag">{cat} • Article placeholder</span>
              <h2>{title}</h2>
              <p>
                Editorial content is being prepared. This title is shown to establish the future
                content structure.
              </p>
              <ArrowLink to="/contact">Register interest</ArrowLink>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
