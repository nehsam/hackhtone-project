import Navbar1 from "./components/navbar1";
import HeroSection from "./components/Hero";
import Editors from "./components/editer";
import CardText from "./components/designer";
import GreenDiv from "./components/green";
import Whitediv from "./components/couple";
import Lastdiv from "./components/upfooter";
import Footer from "./components/footer";
import Topsale from "./components/navbar1 copy";

export default function Home1() {
  return (
    <div className="w-full flex flex-col gap-8">
      {/* Hide Topsale on Mobile */}
      <div className="hidden md:block">
        <Topsale />
      </div>

      {/* Navbar1 Component */}
      <Navbar1 />

      {/* Hero Section */}
      <HeroSection />

      {/* Editors Section */}
      <Editors />

      {/* CardText Section */}
      <CardText />

      {/* Green Div Section */}
      <GreenDiv />

      {/* White Div Section */}
      <Whitediv />

      {/* Lastdiv Section */}
      <Lastdiv />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
