import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { orderSchema } from "./order-schema";

export async function persistOrder(input: unknown) {
  const data = orderSchema.parse(input);
  const { error } = await supabaseAdmin.from("order_requests").upsert({
    submission_key: data.submissionKey,
    name: data.name,
    email: data.email,
    message: data.message,
  }, { onConflict: "submission_key", ignoreDuplicates: true });

  if (error) throw new Error("ثبت درخواست انجام نشد؛ لطفاً دوباره تلاش کنید.");
  return { saved: true as const };
}