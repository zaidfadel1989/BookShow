import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JournalContent from "./components/JournalContent"; // Add this import
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
      <JournalContent />{/* JournalContent comes after */}
      <About />         {/* Move About here */}
      <Services />
      <Teams />
      <Project />
      <Testimonial />
      <FAQ />
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