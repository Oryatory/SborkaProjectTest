import { useCartContext } from "./cart_context";
import useWindowWidth from "../utils/useWindowWidth";
import { createContext, useContext, FC } from "react";

type GlobalContextType = {
  width: number;
  cartIsOpen: boolean;
  lockScroll: () => void;
};

type GlobalProviderPropsType = {
  children: React.ReactNode;
};

const GlobalContext = createContext<GlobalContextType>({
  width: 0,
  cartIsOpen: false,
  lockScroll: () => {},
});

export const GlobalProvider: FC<GlobalProviderPropsType> = ({ children }) => {
  const { width } = useWindowWidth();
  const { cartIsOpen } = useCartContext();
  const lockScroll = async () => {
    if (!cartIsOpen && width <= 768) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
  };

  return (
    <GlobalContext.Provider value={{ width, cartIsOpen, lockScroll }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
