import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/navbar/navbar.component";
import Header from "./components/header/header.component";

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
    </>
  );
}

export default App;
