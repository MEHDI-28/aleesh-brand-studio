import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { SiteLayout } from "../components/SiteLayout";
import {
  PRODUCTS,
  ORDER_WHATSAPP_NUMBER,
  SHOP_POLICY,
  type Product,
} from "../lib/products";

const CART_KEY = "alish-cart";

type Cart = Record<string, number>;

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "فروشگاه — عالیش" },
      { name: "description", content: "خرید سبزیجات ارگانیک تازه از عالیش." },
      { property: "og:title", content: "فروشگاه — عالیش" },
    ],
  }),
  component: ShopPage,
});

function formatPrice(amount: number) {
  return `${amount.toLocaleString("fa-IR")} تومان`;
}

function ShopPage() {
  const [cart, setCart] = useState<Cart>({});
  // جلوگیری از پاک شدن سبد ذخیره‌شده قبل از بارگذاری آن
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) setCart(JSON.parse(saved));
    } catch {
      // داده خراب یا localStorage در دسترس نیست؛ سبد خالی شروع می‌شود
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      // ذخیره ممکن نیست؛ سبد فقط در همین صفحه کار می‌کند
    }
  }, [cart, hydrated]);

  const changeQty = (productId: string, delta: number) => {
    setCart((prev) => {
      const next = { ...prev };
      const qty = (prev[productId] ?? 0) + delta;
      if (qty <= 0) delete next[productId];
      else next[productId] = qty;
      return next;
    });
  };

  const cartItems = useMemo(
    () =>
      PRODUCTS.filter((p) => cart[p.id]).map((p) => ({
        product: p,
        qty: cart[p.id],
      })),
    [cart],
  );

  const total = cartItems.reduce(
    (sum, { product, qty }) => sum + product.price * qty,
    0,
  );
  const itemCount = cartItems.reduce((sum, { qty }) => sum + qty, 0);

  const whatsappHref = useMemo(() => {
    const lines = cartItems.map(
      ({ product, qty }) => `• ${product.name} (${product.unit}) × ${qty}`,
    );
    const text = [
      "سلام، می‌خواهم این موارد را سفارش دهم:",
      ...lines,
      `جمع کل: ${formatPrice(total)}`,
    ].join("\n");
    return `https://wa.me/${ORDER_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [cartItems, total]);

  return (
    <SiteLayout>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[1fr_340px]">
        <section>
          <h1 className="mb-6 text-3xl font-semibold text-primary">فروشگاه</h1>

          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                qty={cart[product.id] ?? 0}
                onChange={(delta) => changeQty(product.id, delta)}
              />
            ))}
          </div>
        </section>

        <aside className="h-fit rounded-xl border border-border bg-card p-5 lg:sticky lg:top-24">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            سبد خرید ({itemCount.toLocaleString("fa-IR")} کالا)
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">سبد شما خالی است.</p>
          ) : (
            <ul className="space-y-3">
              {cartItems.map(({ product, qty }) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-foreground">
                    {product.name} × {qty.toLocaleString("fa-IR")}
                  </span>
                  <span className="text-muted-foreground">
                    {formatPrice(product.price * qty)}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <span className="font-semibold text-foreground">جمع کل</span>
            <span className="font-semibold text-foreground">
              {formatPrice(total)}
            </span>
          </div>

          {cartItems.length > 0 && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              ثبت سفارش در واتساپ
            </a>
          )}

          <div className="mt-5 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">نحوه ارسال و پرداخت</p>
            <p>{SHOP_POLICY.shipping}</p>
            <p>{SHOP_POLICY.delivery}</p>
            <p>{SHOP_POLICY.payment}</p>
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}

function ProductCard({
  product,
  qty,
  onChange,
}: {
  product: Product;
  qty: number;
  onChange: (delta: number) => void;
}) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex aspect-[4/3] items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full rounded-lg object-cover"
          />
        ) : (
          "تصویر محصول"
        )}
      </div>

      <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {product.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="font-semibold text-foreground">
            {formatPrice(product.price)}
          </p>
          <p className="text-xs text-muted-foreground">{product.unit}</p>
        </div>

        {!product.inStock ? (
          <span className="rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground">
            ناموجود
          </span>
        ) : qty === 0 ? (
          <button
            type="button"
            onClick={() => onChange(1)}
            className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90"
          >
            افزودن به سبد
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onChange(-1)}
              aria-label={`کاهش تعداد ${product.name}`}
              className="h-9 w-9 rounded-full border border-input text-foreground hover:bg-accent"
            >
              −
            </button>
            <span className="w-6 text-center text-sm font-medium text-foreground">
              {qty.toLocaleString("fa-IR")}
            </span>
            <button
              type="button"
              onClick={() => onChange(1)}
              aria-label={`افزایش تعداد ${product.name}`}
              className="h-9 w-9 rounded-full border border-input text-foreground hover:bg-accent"
            >
              +
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
