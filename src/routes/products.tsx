import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — ALEESH Organic Vegetables" },
      { name: "description", content: "Seasonal organic vegetable boxes, fresh greens, root vegetables and eco packaging from ALEESH." },
      { property: "og:title", content: "Products — ALEESH Organic Vegetables" },
      { property: "og:description", content: "Seasonal organic boxes, greens, roots and plastic-free packaging." },
    ],
  }),
  component: Products,
});

const products = [
  { name: "Seasonal Harvest Box", d: "A weekly mix of what's best in the field right now." },
  { name: "Leafy Greens", d: "Kale, spinach, lettuce and herbs, cut the morning they ship." },
  { name: "Root Vegetables", d: "Carrots, beets, potatoes and onions with the soil still on." },
  { name: "Tomatoes & Peppers", d: "Sun-ripened, never gassed, full of flavor." },
  { name: "Family Box", d: "A generous weekly box sized for four." },
  { name: "Eco Packaging", d: "Kraft boxes and compostable bags for shops and restaurants." },
];

function Products() {
  return (
    <SiteLayout>
      <PageHeading eyebrow="Our produce" title="Grown slowly. Packed simply." intro="Everything we sell is certified organic and leaves our farm in plastic-free packaging." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.name} className="rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-1 w-10 rounded-full bg-accent" />
            <h2 className="mt-6 text-3xl text-primary">{p.name}</h2>
            <p className="mt-3 text-muted-foreground">{p.d}</p>
            <Link to="/contact" className="mt-6 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline">
              Order →
            </Link>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
