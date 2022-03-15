import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./components/particlce/particle.component";
import Navbar from "./components/navbar/navbar.component";
import Header from "./components/header/header.component";
import AboutMe from "./components/aboutme/aboutme.component";
import Services from "./components/services/services.component";
import Experience from "./components/experience/experience.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Testimonials from "./components/testimonials/testimonials.component";
import Contact from "./components/contacts/contacts.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div>
      <Particles />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
