import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — ALEESH" },
      { name: "description", content: "Why ALEESH grows organic vegetables and packs them without plastic." },
      { property: "og:title", content: "Our Story — ALEESH" },
      { property: "og:description", content: "Organic farming and honest, plastic-free packaging." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeading eyebrow="Our story" title="Food the way it should be." />
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-16 text-lg text-muted-foreground">
        <p>ALEESH began with a simple belief: vegetables should taste like vegetables, and the packaging around them shouldn't outlive them.</p>
        <p>We farm organically, care for our soil, and pick to order. Then we pack every harvest in recyclable kraft and compostable materials, so freshness reaches you without the waste.</p>
      </section>
      <img src={hero} alt="Fresh organic vegetables on a linen table" width={1600} height={1008} loading="lazy" className="mx-auto mb-24 block w-full max-w-5xl rounded-[2rem] object-cover px-6" />
    </SiteLayout>
  );
}
