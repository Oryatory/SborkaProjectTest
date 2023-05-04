import nb01 from "/images/cm996shb_nb_02_i 1.png";
import nb02 from "/images/cm996shb_nb_02_i 2.png";
import nb03 from "/images/cm996shb_nb_02_i 3.png";
import nb04 from "/images/cm996shb_nb_02_i 4.png";
import nb05 from "/images/cm996shb_nb_02_i 5.png";
import nb06 from "/images/cm996shb_nb_02_i 6.png";

export interface ProductProps {
  name: string;
  price: number;
  image: string;
  id: string;
  amount?: number;
  productIsOpen?: boolean;
  setProductIsOpen: (({ product, isOpen }: productIsOpenType) => void) | null;
}
export interface productIsOpenType {
  product: ProductProps | null;
  isOpen: boolean;
}

export const products: ProductProps[] = [
  {
    name: "New Balance 574 Vintage Brights",
    price: 65000,
    image: nb01,
    id: "MT91547",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
  {
    name: "New Balance Made in UK 920 Chinese New Year",
    price: 120000,
    image: nb02,
    id: "MT91548",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
  {
    name: "New Balance 373 Modern Classics",
    price: 80000,
    image: nb03,
    id: "MT91549",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
  {
    name: "New Balance Made in UK 670 Chinese New Year",
    price: 78000,
    image: nb04,
    id: "MT91550",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
  {
    name: "New Balance X-Racer Utility",
    price: 100000,
    image: nb05,
    id: "MT91551",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
  {
    name: "New Balance 5740 Think Colorfully",
    price: 94000,
    image: nb06,
    id: "MT91552",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
];
