import {
  ADD_TO_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
import { ProductProps } from "../utils/data";
import { CartState } from "../context/cart_context";

type ADD_TO_CART = {
  type: string;
  payload: { product: ProductProps };
};
type REMOVE_CART_ITEM = { type: string; payload: string };
type TOGGLE_CART_ITEM_AMOUNT = {
  type: string;
  payload: { id: string; value: string };
};
type COUNT_CART_TOTALS = { type: string; payload: null };
type TOGGLE_CART = { type: string; payload: null };

type ActionType =
  | ADD_TO_CART
  | REMOVE_CART_ITEM
  | TOGGLE_CART_ITEM_AMOUNT
  | COUNT_CART_TOTALS
  | TOGGLE_CART;

const cart_reducer = (state: CartState, action: ActionType): CartState => {
  if (action.type === ADD_TO_CART) {
    const { product } = action.payload as { product: ProductProps };
    const { name, price, image, id } = product;
    const tempItem = state.cart.find((item) => item.id === id);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = (cartItem.amount as number) + 1;
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: name,
        amount: 1,
        image: image,
        price: price,
        setProductIsOpen: null,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload as { id: string; value: string };
    const tempCart = state.cart.map((item) => {
      // console.log(`item.id: ${item.id}, id: ${id}, value: ${value}`);

      if (item.id === id) {
        if (value === "inc") {
          let newAmount = (item.amount as number) + 1;
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = (item.amount as number) - 1;
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    const newTempCart = tempCart.filter((item) => item.amount !== 0);

    return { ...state, cart: newTempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem: ProductProps) => {
        const { amount, price } = cartItem;
        total.total_items += amount as number;
        total.total_amount += price * (amount as number);
        return total;
      },
      { total_items: 0, total_amount: 0 }
    );
    if (total_items === 0) {
      return {
        ...state,
        total_items,
        total_amount,
        tax_fee: 0,
        shipping_fee: 0,
      };
    }
    return {
      ...state,
      total_items,
      total_amount,
      tax_fee: 10000,
      shipping_fee: 15000,
    };
  }
  if (action.type === TOGGLE_CART) {
    return { ...state, cartIsOpen: !state.cartIsOpen };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
