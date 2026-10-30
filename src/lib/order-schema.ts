import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().trim().min(1, "نام خود را وارد کنید.").max(100, "نام بیش از حد طولانی است."),
  email: z.string().trim().email("ایمیل معتبر وارد کنید.").max(255, "ایمیل بیش از حد طولانی است."),
  message: z.string().trim().min(1, "درخواست خود را بنویسید.").max(2000, "درخواست باید حداکثر ۲۰۰۰ نویسه باشد."),
  submissionKey: z.string().uuid("شناسهٔ درخواست معتبر نیست؛ صفحه را دوباره باز کنید."),
});

export type OrderInput = z.infer<typeof orderSchema>;