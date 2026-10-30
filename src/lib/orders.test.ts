import { beforeEach, describe, expect, it, vi } from "vitest";
import { orderSchema } from "./order-schema";

const { upsert, from } = vi.hoisted(() => {
  const upsert = vi.fn();
  return { upsert, from: vi.fn(() => ({ upsert })) };
});
vi.mock("@/integrations/supabase/client.server", () => ({ supabaseAdmin: { from } }));
import { persistOrder } from "./orders.server";

const input = {
  name: "مشتری آزمایشی",
  email: "order-test@example.com",
  message: "درخواست خرید آجیل و میوه خشک",
  submissionKey: "cf7f8572-9b43-4f17-a3df-2a7ac1253001",
};

describe("customer order persistence", () => {
  beforeEach(() => { vi.clearAllMocks(); });
  it("stores the customer's actual order before reporting success", async () => {
    upsert.mockResolvedValue({ error: null });
    await expect(persistOrder(input)).resolves.toEqual({ saved: true });
    expect(from).toHaveBeenCalledWith("order_requests");
    expect(upsert).toHaveBeenCalledWith({
      submission_key: input.submissionKey, name: input.name, email: input.email, message: input.message,
    }, { onConflict: "submission_key", ignoreDuplicates: true });
  });
  it("does not report success when saving fails", async () => {
    upsert.mockResolvedValue({ error: { message: "unavailable" } });
    await expect(persistOrder(input)).rejects.toThrow("ثبت درخواست انجام نشد");
  });
  it("rejects invalid input without writing a request", async () => {
    await expect(persistOrder({ ...input, email: "invalid" })).rejects.toThrow();
    expect(from).not.toHaveBeenCalled();
  });
  it("rejects empty requests", () => {
    expect(orderSchema.safeParse({ ...input, message: "   " }).success).toBe(false);
  });
});