import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FincaPhotos from './components/FincaPhotos';
import Rooms from './components/Rooms';
import Amenidades from './components/Amenidades';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <FincaPhotos />
        <Rooms />
        <Amenidades />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}

export default App;
