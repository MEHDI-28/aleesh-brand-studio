export type Product = {
  id: string;
  name: string;
  description: string;
  /** قیمت به تومان */
  price: number;
  /** واحد فروش، مثلاً «۵۰۰ گرم» یا «عدد» */
  unit: string;
  inStock: boolean;
  image?: string;
};

// TODO: محصولات واقعی را جایگزین کنید. قیمت‌ها نمونه هستند.
export const PRODUCTS: Product[] = [
  {
    id: "spinach",
    name: "اسفناج ارگانیک",
    description: "تازه و بدون سم، برداشت همین هفته.",
    price: 85000,
    unit: "۵۰۰ گرم",
    inStock: true,
  },
  {
    id: "tomato",
    name: "گوجه‌فرنگی گلخانه‌ای",
    description: "شیرین و آبدار، مناسب سالاد و سس.",
    price: 120000,
    unit: "کیلو",
    inStock: true,
  },
  {
    id: "parsley",
    name: "جعفری ارگانیک",
    description: "بسته‌بندی بدون پلاستیک با کاغذ بازیافتی.",
    price: 45000,
    unit: "دسته",
    inStock: true,
  },
  {
    id: "basil",
    name: "ریحان تازه",
    description: "عطر و طعم قوی، مناسب پیتزا و پاستا.",
    price: 60000,
    unit: "۲۵۰ گرم",
    inStock: false,
  },
];

/** شماره واتساپ برای ثبت سفارش، با فرمت بین‌المللی بدون + */
// TODO: شماره واقعی را بگذارید، مثلاً 989121234567
export const ORDER_WHATSAPP_NUMBER = "989000000000";

/** متن‌های پیش‌فرض نحوه ارسال و پرداخت. بعداً هر کدام را که لازم بود تغییر دهید. */
// TODO: بعد از مشخص شدن، این متن‌ها را به‌روز کنید.
export const SHOP_POLICY = {
  shipping: "هزینه ارسال بعد از تأیید سفارش، جداگانه به شما اعلام می‌شود.",
  delivery: "تحویل معمولاً ظرف ۲۴ تا ۴۸ ساعت کاری پس از تأیید سفارش انجام می‌شود.",
  payment: "پرداخت پس از تأیید سفارش، از طریق کارت به کارت انجام می‌شود.",
};
