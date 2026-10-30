import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import mark from "@/assets/aleesh-mark.png";

const nav = [
  { to: "/", label: "خانه" },
  { to: "/products", label: "محصولات" },
  { to: "/about", label: "داستان ما" },
  { to: "/contact", label: "تماس" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={mark} alt="" width={28} height={34} className="h-8 w-auto" />
            <span className="font-display text-2xl tracking-[0.25em] text-primary">ALEESH</span>
          </Link>
          <nav className="hidden gap-8 text-sm md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground transition hover:opacity-90"
          >
            سفارش دهید
          </Link>
        </div>
        <nav className="flex justify-center gap-6 pb-3 text-sm md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground" activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl tracking-[0.25em]">ALEESH</p>
            <p className="mt-3 text-sm opacity-80">سبزیجات ارگانیک، بسته‌بندی صادقانه.</p>
          </div>
          <div className="text-sm opacity-80">
            <p className="font-semibold opacity-100">صفحات</p>
            <p className="mt-2">محصولات · داستان ما · تماس</p>
          </div>
          <div className="text-sm opacity-80">
            <p className="font-semibold opacity-100">تعهد ما</p>
            <p className="mt-2">ارگانیک تأییدشده · بسته‌بندی بدون پلاستیک · از مزرعه تا در خانه</p>
          </div>
        </div>
        <p className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-60">
          © {new Date().getFullYear()} الیش. تمامی حقوق محفوظ است.
        </p>
      </footer>
    </div>
  );
}

export function PageHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center">
      <p className="text-sm text-accent-foreground/70">{eyebrow}</p>
      <h1 className="mt-4 text-5xl text-primary md:text-6xl">{title}</h1>
      {intro && <p className="mt-5 text-lg text-muted-foreground">{intro}</p>}
    </section>
  );
}
