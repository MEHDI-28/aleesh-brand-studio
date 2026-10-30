import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";
import harvestBox from "@/assets/products/harvest-box.jpg";
import leafyGreens from "@/assets/products/leafy-greens.jpg";
import rootVegetables from "@/assets/products/root-vegetables.jpg";
import tomatoesPeppers from "@/assets/products/tomatoes-peppers.jpg";
import familyBox from "@/assets/products/family-box.jpg";
import ecoPackaging from "@/assets/products/eco-packaging.jpg";
import nuts from "@/assets/products/nuts.jpg";
import driedFruits from "@/assets/products/dried-fruits.jpg";

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
  { name: "جعبه برداشت فصل", d: "ترکیبی هفتگی از بهترین‌های همین روزهای مزرعه.", img: harvestBox, alt: "جعبه‌ی کاغذی پر از سبزیجات فصل" },
  { name: "سبزیجات برگی", d: "کلم، اسفناج، کاهو و سبزی خوراکی؛ چیده‌شده در صبح روز ارسال.", img: leafyGreens, alt: "دسته‌های کلم، اسفناج و کاهوی تازه" },
  { name: "سبزیجات ریشه‌ای", d: "هویج، چغندر، سیب‌زمینی و پیاز؛ تازه از دل خاک.", img: rootVegetables, alt: "هویج، چغندر، سیب‌زمینی و پیاز روی کاغذ کرافت" },
  { name: "گوجه و فلفل", d: "رسیده زیر آفتاب، بدون گازدهی، پر از طعم.", img: tomatoesPeppers, alt: "گوجه‌های رسیده و فلفل در ظرف کاغذی" },
  { name: "جعبه خانواده", d: "جعبه‌ی هفتگی بزرگ و سخاوتمندانه، مناسب چهار نفر.", img: familyBox, alt: "صندوق چوبی پر از سبزیجات تازه" },
  { name: "بسته‌بندی سبز", d: "جعبه‌های کرافت و کیسه‌های کمپوست‌شدنی برای فروشگاه‌ها و رستوران‌ها.", img: ecoPackaging, alt: "جعبه‌های کرافت و کیسه‌های کمپوست‌شدنی" },
  { name: "آجیل و مغزها", d: "پسته، بادام، گردو و بادام‌هندی؛ تازه و در بسته‌بندی کاغذی.", img: nuts, alt: "پسته، بادام، گردو و بادام‌هندی در ظرف‌های کاغذی" },
  { name: "میوه‌ی خشک", d: "زردآلو، انجیر، خرما و کشمش؛ شیرین و طبیعی، بدون افزودنی.", img: driedFruits, alt: "زردآلو، انجیر، خرما و کشمش خشک در جعبه‌ی کاغذی" },
];

function Products() {
  return (
    <SiteLayout>
      <PageHeading eyebrow="محصولات ما" title="آهسته پرورش می‌دهیم. ساده بسته‌بندی می‌کنیم." intro="همه‌ی محصولات ما ارگانیک تأییدشده هستند و بدون پلاستیک از مزرعه بیرون می‌روند." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.name} className="overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-lg">
            <img src={p.img} alt={p.alt} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-8 pt-6">
              <div className="h-1 w-10 rounded-full bg-accent" />
              <h2 className="mt-6 text-3xl text-primary">{p.name}</h2>
              <p className="mt-3 text-muted-foreground">{p.d}</p>
              <Link to="/contact" className="mt-6 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline">
                سفارش ←
              </Link>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
