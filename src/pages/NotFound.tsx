import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NotFound404TopBanner } from "@/components/NotFound404/NotFound404TopBanner";
import { NotFound404Navigation } from "@/components/NotFound404/NotFound404Navigation";
import { NotFound404Content } from "@/components/NotFound404/NotFound404Content";
import { NotFound404Footer } from "@/components/NotFound404/NotFound404Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-white flex flex-col items-stretch">
      <header className="bg-white flex w-full flex-col items-stretch font-normal max-md:max-w-full">
        <NotFound404TopBanner />
        <NotFound404Navigation />
      </header>
      <NotFound404Content />
      <main className="flex flex-col items-center">
      </main>
      <NotFound404Footer />
    </div>
  );
};

export default NotFound;
