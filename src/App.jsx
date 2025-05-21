import About from "./Components/About";
import Footer from "./Components/Footer";
import Coffees from "./Components/Coffees";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import "./App.css";

function App() {
  return (
    <div>
      <Coffees />
      <Contact />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;