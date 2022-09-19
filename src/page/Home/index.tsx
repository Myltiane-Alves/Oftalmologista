import About from "../../components/About";
import Blog from "../../components/Blog";
import Contact from "../../components/SectionContact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import MobileMenu from "../../components/Navbar/MobileMenu";
import Plan from "../../components/Plan";
import Rating from "../../components/Rating";
import Services from "../../components/SectionServices";
import SectionContact from "../../components/SectionContact";


export function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Rating />
      <Plan />
      <About />
      <Blog />
      <SectionContact />
      <Footer />
    </>
  )
}
