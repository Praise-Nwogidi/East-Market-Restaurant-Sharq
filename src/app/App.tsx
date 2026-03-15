import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { FeaturedDishes } from "./components/FeaturedDishes";
import { Menu } from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}