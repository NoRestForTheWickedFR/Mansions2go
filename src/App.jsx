import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import StartPage from './components/Startpage.jsx';
import PropertiesSection from './components/PropertiesSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactSection from './components/ContactSection.jsx';

function App() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash.substring(1));
    }
  }, []);

  const handleNavigation = (path, sectionId) => {
    if (path === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 0);
    }
  };

  return (
    <div className="bg-[#F5F5DC] min-h-screen flex flex-col">
      <Header handleNavigation={handleNavigation} />
      <Routes>
        <Route path="/" element={
          <>
            <StartPage />
            <PropertiesSection />
            <Testimonials />
            <ContactSection />
          </>
        } />
        <Route path="/properties" element={<PropertiesSection />} />
      </Routes>
    </div>
  );
}

export default App;