export type FeaturedProduct = {
  name: string;
  badge: string;
  description: string;
  note: string;
  image: {
    src: string;
    alt: string;
    position: string;
  };
};

export type SupportingProduct = {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
    position: string;
  };
};

export const FEATURED_PRODUCTS = [
  {
    name: "Fresh Meat",
    badge: "Bestseller",
    description: "Fresh, farm-sourced cuts prepared the way you need them.",
    note: "Sold per kilogram",
    image: {
      src: "/images/products/fresh-meat.webp",
      alt: "Fresh pork cuts including pork chops, pork belly, and boneless pork",
      position: "object-[52%_center]",
    },
  },
  {
    name: "Lechon",
    badge: "Celebration Favorite",
    description: "Regular and large lechon served with free lechon sauce.",
    note: "Please order at least one day ahead",
    image: {
      src: "/images/products/lechon.webp",
      alt: "Whole roasted lechon presented on banana leaves",
      position: "object-[center_38%]",
    },
  },
] as const satisfies readonly [FeaturedProduct, FeaturedProduct];

export const SUPPORTING_PRODUCTS = [
  {
    name: "Frozen Meat",
    description: "Convenient favorites ready for everyday meals",
    image: {
      src: "/images/products/frozen-meat.webp",
      alt: "Frozen pork portions arranged in clear food containers",
      position: "object-[55%_center]",
    },
  },
  {
    name: "Embutido",
    description: "Sold per piece",
    image: {
      src: "/images/products/embutido.webp",
      alt: "Sliced embutido loaf arranged on banana leaves",
      position: "object-center",
    },
  },
  {
    name: "Skinless",
    description: "Sold per pack",
    image: {
      src: "/images/products/skinless.webp",
      alt: "Skinless sausage portions arranged on banana leaves",
      position: "object-[center_56%]",
    },
  },
  {
    name: "Longganisa",
    description: "Sold per pack",
    image: {
      src: "/images/products/longganisa.webp",
      alt: "Longganisa links arranged on banana leaves",
      position: "object-[center_54%]",
    },
  },
] as const satisfies readonly SupportingProduct[];
