import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProgramCard from "@/components/ProgramCard";
import content from "@/data/site-content.json";

export default function Home() {
  return (
    <>
      <Hero {...content.hero} />

      {content.sections.map((s, i) => (
        <Section key={i} section={s}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {s.items.map((item, j) => (
              <ProgramCard key={j} item={item} />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
