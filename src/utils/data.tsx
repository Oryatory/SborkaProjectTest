export interface ProductProps {
  name: string;
  price: number;
  image: string;
  id: string;
  amount: number;
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
    image: "src/assets/images/cm996shb_nb_02_i 1.png",
    id: "MT91547",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
  {
    name: "New Balance Made in UK 920 Chinese New Year",
    price: 120000,
    image: "src/assets/images/cm996shb_nb_02_i 2.png",
    id: "MT91548",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
  {
    name: "New Balance 373 Modern Classics",
    price: 80000,
    image: "src/assets/images/cm996shb_nb_02_i 3.png",
    id: "MT91549",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
  {
    name: "New Balance Made in UK 670 Chinese New Year",
    price: 78000,
    image: "src/assets/images/cm996shb_nb_02_i 4.png",
    id: "MT91550",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
  {
    name: "New Balance X-Racer Utility",
    price: 100000,
    image: "src/assets/images/cm996shb_nb_02_i 5.png",
    id: "MT91551",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
  {
    name: "New Balance 5740 Think Colorfully",
    price: 94000,
    image: "src/assets/images/cm996shb_nb_02_i 6.png",
    id: "MT91552",
    amount: 0,
    productIsOpen: false,
    setProductIsOpen: null,
  },
];
