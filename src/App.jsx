import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./data/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Experience from "./components/Experience"
import { ThemeProvider } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      
      <About />
      <Skills />
      <Services />
      {/* <Experience/> */}
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer/>
    </ThemeProvider>
  );
}
