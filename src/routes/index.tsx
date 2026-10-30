import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero.jpg";
import packaging from "@/assets/packaging.jpg";
import logo from "@/assets/aleesh-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALEESH — Organic Vegetables & Eco Packaging" },
      { name: "description", content: "ALEESH grows and packs fresh organic vegetables in plastic-free packaging, from farm to your door." },
      { property: "og:title", content: "ALEESH — Organic Vegetables & Eco Packaging" },
      { property: "og:description", content: "Fresh organic vegetables, honestly packed in plastic-free packaging." },
    ],
  }),
  component: Index,
});

const values = [
  { t: "Certified organic", d: "Grown without synthetic pesticides or fertilizers, in living soil." },
  { t: "Plastic-free packing", d: "Kraft boxes and compostable bags that protect freshness, not the planet." },
  { t: "Picked to order", d: "Harvested close to delivery so every leaf arrives crisp." },
];

function Index() {
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Organic · Fresh · Packed with care</p>
          <h1 className="mt-5 text-6xl leading-[1.02] text-primary md:text-7xl">
            From living soil <em className="text-accent-foreground/80">to your table.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            ALEESH grows organic vegetables and packs them in honest, plastic-free packaging — fresh for you, kind to the earth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="rounded-full bg-primary px-7 py-3 text-primary-foreground transition hover:opacity-90">
              See our produce
            </Link>
            <Link to="/about" className="rounded-full border border-primary px-7 py-3 text-primary transition hover:bg-secondary">
              Our story
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src={hero} alt="Organic carrots, kale, tomatoes and beets in kraft paper and a wooden crate" width={1600} height={1008} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-xl md:block">
            <img src={logo} alt="ALEESH logo" width={760} height={672} className="h-20 w-auto" />
          </div>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.t}>
              <p className="font-display text-5xl text-accent">0{i + 1}</p>
              <h3 className="mt-2 text-3xl text-primary">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={packaging} alt="Organic produce in kraft boxes and compostable bags" width={1200} height={1200} loading="lazy" className="w-full rounded-[2rem] object-cover" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Packaging</p>
          <h2 className="mt-4 text-5xl text-primary">Packed as carefully as it was grown.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Every ALEESH box is recyclable kraft, every bag compostable. We also offer custom eco packaging for shops and restaurants.
          </p>
          <Link to="/contact" className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-accent-foreground transition hover:opacity-90">
            Ask about wholesale
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
