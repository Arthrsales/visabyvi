import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Timelines from './components/Timelines/Timelines';
import WhyUs from './components/WhyUs/WhyUs';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import AboutPage from './Pages/About/AboutPage';

const Home = () => (
  <main>
    <Hero />
    <Services />
    <Process />
    <Timelines />
    <WhyUs />
    <Testimonials />
    <FAQ />
    <CTA />
  </main>
);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;