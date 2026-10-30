import { createServerFn } from "@tanstack/react-start";
import { orderSchema } from "./order-schema";

export const submitOrder = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => orderSchema.parse(input))
  .handler(async ({ data }) => {
    const { persistOrder } = await import("./orders.server");
    return persistOrder(data);
  });