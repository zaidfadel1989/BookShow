import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JournalContent from "./components/JournalContent";
import About from "./components/About";
import Services from "./components/Services";
import Teams from "./components/Teams";
import Project from "./components/Project";
import Testimonial from "./components/Testmonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Project />
      <About />  
      <Teams /> 
      <JournalContent />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/BookShow">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
