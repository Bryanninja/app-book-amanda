import Hero from "@/components/Hero";
import QuoteBanner from "@/components/QuoteBanner";
import Testimony from "@/components/Testimony";
import Gallery from "@/components/Gallery";
import Transformation from "@/components/Transformation";
import AboutAuthor from "@/components/AboutAuthor";
import TheBook from "@/components/TheBook";
import CheckoutModal from "@/components/CheckoutModal";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-theme-base selection:bg-theme-salmon/30 selection:text-theme-brown">
      <Hero />
      <QuoteBanner />
      <Testimony />
      <Gallery />
      <Transformation />
      <AboutAuthor />
      <TheBook />
      <FAQ />
      <Footer />
      <CheckoutModal />
    </main>
  );
}
