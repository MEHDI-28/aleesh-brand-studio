import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس و سفارش — الیش" },
      { name: "description", content: "جعبه‌های سبزیجات ارگانیک سفارش دهید یا درباره‌ی بسته‌بندی سبز و عمده‌فروشی با الیش در تماس باشید." },
      { property: "og:title", content: "تماس و سفارش — الیش" },
      { property: "og:description", content: "سفارش سبزیجات ارگانیک یا استعلام بسته‌بندی عمده‌فروشی." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-lg border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
  return (
    <SiteLayout>
      <PageHeading eyebrow="در تماس باشید" title="تازگی را برایتان می‌آوریم." intro="بگویید چه می‌خواهید — جعبه‌ی هفتگی، یک سفارش، یا بسته‌بندی عمده‌فروشی." />
      <section className="mx-auto max-w-xl px-6 pb-24">
        {sent ? (
          <p className="rounded-2xl bg-secondary p-8 text-center text-lg text-primary">سپاسگزاریم! به‌زودی با شما تماس می‌گیریم.</p>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input required placeholder="نام شما" className={field} />
            <input required type="email" placeholder="ایمیل" dir="ltr" className={`${field} text-right`} />
            <textarea required rows={5} placeholder="چه می‌خواهید سفارش دهید؟" className={field} />
            <button className="w-full rounded-full bg-primary py-3 text-primary-foreground transition hover:opacity-90">ارسال پیام</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
