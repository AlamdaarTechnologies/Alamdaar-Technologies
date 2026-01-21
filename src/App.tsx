import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PortfolioPage } from "./components/PortfolioPage";
import { LoadingScreen } from "./components/LoadingScreen";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "portfolio">("home");
  const [isLoading, setIsLoading] = useState(true);

  const navigateToPortfolio = () => {
    setCurrentPage("portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  if (currentPage === "portfolio") {
    return (
      <>
        <PortfolioPage onNavigateBack={navigateToHome} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio onNavigateToPortfolio={navigateToPortfolio} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
