import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { LoaderCircle, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { orderSchema } from "@/lib/order-schema";
import { submitOrder } from "@/lib/orders.functions";
import { SiteLayout, PageHeading } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس و سفارش — عالیش" },
      { name: "description", content: "جعبه‌های سبزیجات ارگانیک سفارش دهید یا درباره‌ی بسته‌بندی سبز و عمده‌فروشی با عالیش در تماس باشید." },
      { property: "og:title", content: "تماس و سفارش — عالیش" },
      { property: "og:description", content: "سفارش سبزیجات ارگانیک یا استعلام بسته‌بندی عمده‌فروشی." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [submissionKey, setSubmissionKey] = useState<string>();
  const saveOrder = useServerFn(submitOrder);
  const field = "w-full rounded-lg border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
  return (
    <SiteLayout>
      <PageHeading eyebrow="در تماس باشید" title="تازگی را برایتان می‌آوریم." intro="بگویید چه می‌خواهید — جعبه‌ی هفتگی، یک سفارش، یا بسته‌بندی عمده‌فروشی." />
      <section className="mx-auto max-w-xl px-6 pb-24">
        {sent ? (
          <div role="status" className="space-y-4 text-center text-primary">
            <CheckCircle2 className="mx-auto size-10" aria-hidden="true" />
            <p className="text-lg">سپاسگزاریم! درخواست شما با موفقیت ثبت شد.</p>
            <Button variant="outline" onClick={() => { setSent(false); setSubmissionKey(undefined); }}>ثبت درخواست دیگر</Button>
          </div>
        ) : (
          <form
            className="space-y-4"
            aria-busy={pending}
            onSubmit={async (e) => {
              e.preventDefault();
              if (pending) return;
              setError("");
              const formData = new FormData(e.currentTarget);
              const key = submissionKey ?? crypto.randomUUID();
              setSubmissionKey(key);
              const parsed = orderSchema.safeParse({
                name: formData.get("name"), email: formData.get("email"),
                message: formData.get("message"), submissionKey: key,
              });
              if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "اطلاعات فرم را بررسی کنید."); return; }
              setPending(true);
              try {
                const result = await saveOrder({ data: parsed.data });
                if (result.saved) setSent(true);
              } catch {
                setError("ثبت درخواست انجام نشد؛ اطلاعات شما حفظ شده است. لطفاً دوباره تلاش کنید.");
              } finally { setPending(false); }
            }}
          >
            <label className="block space-y-2"><span>نام شما</span><input name="name" required maxLength={100} autoComplete="name" disabled={pending} placeholder="نام شما" className={field} /></label>
            <label className="block space-y-2"><span>ایمیل</span><input name="email" required type="email" maxLength={255} autoComplete="email" disabled={pending} placeholder="ایمیل" dir="ltr" className={`${field} text-right`} /></label>
            <label className="block space-y-2"><span>درخواست سفارش</span><textarea name="message" required maxLength={2000} disabled={pending} rows={5} placeholder="چه می‌خواهید سفارش دهید؟" className={field} /></label>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={pending} className="h-12 w-full">{pending ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}{pending ? "در حال ثبت…" : "ارسال درخواست"}</Button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}

