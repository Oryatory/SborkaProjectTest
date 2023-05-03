import { useEffect, useContext, useReducer, createContext, FC } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
  TOGGLE_CART,
} from "../actions";
import { ProductProps } from "../utils/data";

const getLocalStorage = (): ProductProps[] => {
  let cart: string | null = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export interface CartState {
  cart: ProductProps[];
  total_items: number;
  total_amount: number;
  tax_fee: number;
  shipping_fee: number;
  cartIsOpen: boolean;
}

const initialState: CartState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  tax_fee: 10000,
  shipping_fee: 15000,
  cartIsOpen: false,
};

export type CartContextType = {
  cart: ProductProps[];
  total_items: number;
  total_amount: number;
  tax_fee: number;
  shipping_fee: number;
  cartIsOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: ProductProps) => void;
  removeItem: (id: string) => void;
  toggleAmount: (id: string, value: string) => void;
};
const CartContext = createContext<CartContextType>({
  cart: [],
  total_items: 0,
  total_amount: 0,
  tax_fee: 0,
  shipping_fee: 0,
  cartIsOpen: false,
  toggleCart: () => {},
  addToCart: () => {},
  removeItem: () => {},
  toggleAmount: () => {},
});

type CartProviderPropsType = {
  children: React.ReactNode;
};

export const CartProvider: FC<CartProviderPropsType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart
  const addToCart = (product: ProductProps) => {
    dispatch({ type: ADD_TO_CART, payload: { product } });
  };
  // remove item
  const removeItem = (id: string) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  // toggle amount
  const toggleAmount = (id: string, value: string) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: {
        id,
        value,
      },
    });
  };
  const toggleCart = () => {
    dispatch({ type: TOGGLE_CART, payload: null });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS, payload: null });
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, toggleCart, addToCart, removeItem, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
