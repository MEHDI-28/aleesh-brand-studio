import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "داستان ما — الیش" },
      { name: "description", content: "چرا الیش سبزیجات را ارگانیک پرورش می‌دهد و بدون پلاستیک بسته‌بندی می‌کند." },
      { property: "og:title", content: "داستان ما — الیش" },
      { property: "og:description", content: "کشاورزی ارگانیک و بسته‌بندی صادقانه و بدون پلاستیک." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeading eyebrow="داستان ما" title="غذا، آن‌طور که باید باشد." />
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-16 text-lg text-muted-foreground">
        <p>الیش با یک باور ساده آغاز شد: سبزی باید طعم سبزی بدهد و بسته‌بندی‌اش نباید از خودِ سبزی ماندگارتر باشد.</p>
        <p>ما ارگانیک کشاورزی می‌کنیم، از خاک مراقبت می‌کنیم و به‌صورت به‌موقع و به سفارش برداشت می‌کنیم. سپس هر برداشت را در کرافت بازیافتی و مواد کمپوست‌شدنی بسته‌بندی می‌کنیم، تا تازگی بدون زباله به دست شما برسد.</p>
      </section>
      <img src={hero} alt="سبزیجات تازه‌ی ارگانیک روی رومیزی کتانی" width={1600} height={1008} loading="lazy" className="mx-auto mb-24 block w-full max-w-5xl rounded-[2rem] object-cover px-6" />
    </SiteLayout>
  );
}
