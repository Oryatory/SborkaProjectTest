import { FC, useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import Loading from "./components/Loading";

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", handleLoading);
    window.addEventListener("load", handleLoading);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoading);
      window.removeEventListener("load", handleLoading);
    };
  }, []);

  return <>{isLoading ? <Loading /> : <MainPage />}</>;
};

export default App;
