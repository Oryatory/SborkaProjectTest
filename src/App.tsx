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
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return <>{isLoading ? <Loading /> : <MainPage />}</>;
};

export default App;
