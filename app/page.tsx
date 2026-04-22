import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyDifferent from "./components/WhyDifferent";
import AppPreview from "./components/AppPreview";
import SocialProof from "./components/SocialProof";
import Compare from "./components/Compare";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <WhyDifferent />
      <AppPreview />
      <SocialProof />
      <Compare />
      <FinalCTA />
      <Footer />
    </main>
  );
}
