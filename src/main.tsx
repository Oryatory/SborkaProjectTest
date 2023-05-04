import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "/fonts/Roboto-Regular.woff2";
import "./scss/index.scss";
import { CartProvider } from "./context/cart_context.tsx";
import { GlobalProvider } from "./context/useGlobalContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </CartProvider>
  </React.StrictMode>
);
