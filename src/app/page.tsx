import Hero from "@/components/Hero";
import Testimony from "@/components/Testimony";
import TheBook from "@/components/TheBook";
import CheckoutModal from "@/components/CheckoutModal";

export default function Home() {
  return (
    <main className="relative bg-theme-base selection:bg-theme-salmon/30 selection:text-theme-brown">
      <Hero />
      <Testimony />
      <TheBook />
      <CheckoutModal />
    </main>
  );
}
