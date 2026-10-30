import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero.jpg";
import packaging from "@/assets/packaging.jpg";
import logo from "@/assets/aleesh-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الیش — سبزیجات ارگانیک و بسته‌بندی سبز" },
      { name: "description", content: "الیش سبزیجات تازه‌ی ارگانیک پرورش می‌دهد و در بسته‌بندی بدون پلاستیک عرضه می‌کند؛ از مزرعه تا سفره‌ی شما." },
      { property: "og:title", content: "الیش — سبزیجات ارگانیک و بسته‌بندی سبز" },
      { property: "og:description", content: "سبزیجات تازه‌ی ارگانیک، بسته‌بندی صادقانه و بدون پلاستیک." },
    ],
  }),
  component: Index,
});

const values = [
  { t: "ارگانیک تأییدشده", d: "بدون سموم و کودهای شیمیایی، در خاکی زنده و سالم پرورش می‌یابد." },
  { t: "بسته‌بندی بدون پلاستیک", d: "جعبه‌های کاغذی کرافت و کیسه‌های کمپوست‌شدنی؛ تازگی را حفظ می‌کنند و به زمین آسیب نمی‌رسانند." },
  { t: "چیده‌شده به سفارش", d: "نزدیک به زمان تحویل برداشت می‌کنیم تا هر برگ تازه و ترد به دست شما برسد." },
];

function Index() {
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm text-muted-foreground">ارگانیک · تازه · بسته‌بندی‌شده با دقت</p>
          <h1 className="mt-5 text-6xl leading-[1.05] text-primary md:text-7xl">
            از خاک زنده <span className="text-accent-foreground/80">تا سفره‌ی شما.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            الیش سبزیجات ارگانیک پرورش می‌دهد و آن‌ها را در بسته‌بندی صادقانه و بدون پلاستیک عرضه می‌کند — تازه برای شما، مهربان با زمین.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="rounded-full bg-primary px-7 py-3 text-primary-foreground transition hover:opacity-90">
              دیدن محصولات ما
            </Link>
            <Link to="/about" className="rounded-full border border-primary px-7 py-3 text-primary transition hover:bg-secondary">
              داستان ما
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src={hero} alt="هویج، کلم، گوجه و چغندر ارگانیک در کاغذ کرافت و جعبه‌ی چوبی" width={1600} height={1008} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-xl md:block">
            <img src={logo} alt="لوگوی الیش" width={760} height={672} className="h-20 w-auto" />
          </div>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.t}>
              <p className="font-display text-5xl text-accent">۰{i + 1}</p>
              <h3 className="mt-2 text-3xl text-primary">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={packaging} alt="محصولات ارگانیک در جعبه‌های کرافت و کیسه‌های کمپوست‌شدنی" width={1200} height={1200} loading="lazy" className="w-full rounded-[2rem] object-cover" />
        <div>
          <p className="text-sm text-muted-foreground">بسته‌بندی</p>
          <h2 className="mt-4 text-5xl text-primary">همان‌قدر با دقت بسته‌بندی می‌کنیم که پرورش داده‌ایم.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            هر جعبه‌ی الیش کرافت بازیافتی است و هر کیسه کمپوست‌شدنی. برای فروشگاه‌ها و رستوران‌ها بسته‌بندی سبز سفارشی هم ارائه می‌دهیم.
          </p>
          <Link to="/contact" className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-accent-foreground transition hover:opacity-90">
            استعلام عمده‌فروشی
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
