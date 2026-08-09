export type ShopLocation = {
  badge: string;
  name: string;
  address: string;
  mapUrl: string;
  image: {
    src: string;
    alt: string;
    position: string;
  };
};

export const SHOP_HOURS = {
  days: "Monday–Sunday",
  time: "5:00 AM–12:00 PM",
} as const;

export const SHOP_PHONE = {
  display: "09294814623",
  href: "tel:+639294814623",
} as const;

export const SHOP_LOCATIONS = [
  {
    badge: "Main Branch",
    name: "Poblacion",
    address: "Poblacion, Bustos, Bulacan",
    mapUrl: "https://maps.app.goo.gl/LzsKruw7Se14hCn68",
    image: {
      src: "/images/shop/poblacion-storefront.webp",
      alt: "Apol’s Meat Shop storefront at the Poblacion branch in Bustos",
      position: "object-[center_48%]",
    },
  },
  {
    badge: "Bonga Mayor Branch",
    name: "Bonga Mayor",
    address: "Bonga Mayor, Bustos, Bulacan",
    mapUrl: "https://maps.app.goo.gl/iyomdCU9FJpNNE7N6",
    image: {
      src: "/images/shop/bonga-mayor-storefront.webp",
      alt: "Apol’s Meat Shop storefront at the Bonga Mayor branch in Bustos",
      position: "object-center",
    },
  },
] as const satisfies readonly ShopLocation[];
