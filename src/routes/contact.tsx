import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Orders — ALEESH" },
      { name: "description", content: "Order organic vegetable boxes or ask about eco packaging and wholesale from ALEESH." },
      { property: "og:title", content: "Contact & Orders — ALEESH" },
      { property: "og:description", content: "Order organic vegetables or ask about wholesale packaging." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-lg border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
  return (
    <SiteLayout>
      <PageHeading eyebrow="Get in touch" title="Let's get you fresh." intro="Tell us what you'd like — a weekly box, a one-time order, or wholesale packaging." />
      <section className="mx-auto max-w-xl px-6 pb-24">
        {sent ? (
          <p className="rounded-2xl bg-secondary p-8 text-center text-lg text-primary">Thank you! We'll be in touch soon.</p>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input required placeholder="Your name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <textarea required rows={5} placeholder="What would you like to order?" className={field} />
            <button className="w-full rounded-full bg-primary py-3 text-primary-foreground transition hover:opacity-90">Send message</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
