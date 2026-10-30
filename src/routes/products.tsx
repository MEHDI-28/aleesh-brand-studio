import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "محصولات — الیش" },
      { name: "description", content: "جعبه‌های فصلی سبزیجات ارگانیک، سبزی‌های برگی تازه، سبزیجات ریشه‌ای و بسته‌بندی سبز از الیش." },
      { property: "og:title", content: "محصولات — الیش" },
      { property: "og:description", content: "جعبه‌های فصلی ارگانیک، سبزی برگی، سبزیجات ریشه‌ای و بسته‌بندی بدون پلاستیک." },
    ],
  }),
  component: Products,
});

const products = [
  { name: "جعبه برداشت فصل", d: "ترکیبی هفتگی از بهترین‌های همین روزهای مزرعه." },
  { name: "سبزیجات برگی", d: "کلم، اسفناج، کاهو و سبزی خوراکی؛ چیده‌شده در صبح روز ارسال." },
  { name: "سبزیجات ریشه‌ای", d: "هویج، چغندر، سیب‌زمینی و پیاز؛ تازه از دل خاک." },
  { name: "گوجه و فلفل", d: "رسیده زیر آفتاب، بدون گازدهی، پر از طعم." },
  { name: "جعبه خانواده", d: "جعبه‌ی هفتگی بزرگ و سخاوتمندانه، مناسب چهار نفر." },
  { name: "بسته‌بندی سبز", d: "جعبه‌های کرافت و کیسه‌های کمپوست‌شدنی برای فروشگاه‌ها و رستوران‌ها." },
];

function Products() {
  return (
    <SiteLayout>
      <PageHeading eyebrow="محصولات ما" title="آهسته پرورش می‌دهیم. ساده بسته‌بندی می‌کنیم." intro="همه‌ی محصولات ما ارگانیک تأییدشده هستند و بدون پلاستیک از مزرعه بیرون می‌روند." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.name} className="rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-1 w-10 rounded-full bg-accent" />
            <h2 className="mt-6 text-3xl text-primary">{p.name}</h2>
            <p className="mt-3 text-muted-foreground">{p.d}</p>
            <Link to="/contact" className="mt-6 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline">
              سفارش ←
            </Link>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
