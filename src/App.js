import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
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
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              denstiy: {
                ebable: true,
                value_area: 900,
              },
            },
            shape: {
              stroke: {
                width: 6,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
