import { FC } from "react";
import MainPage from "./pages/MainPage";
import { Analytics } from "@vercel/analytics/react";

const App: FC = () => {
  return (
    <>
      <MainPage />
      <Analytics />
    </>
  );
};

export default App;
