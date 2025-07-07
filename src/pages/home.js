import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import AppHeader from '../components/header';
import AppHero from '../components/hero'; // Corrected relative path;
import AppBlog from '../components/blog';

import Card from '../components/slider'
function Home() {
  return (
    <div className="App">
      <main>
      <a
      href="https://wa.me/2348012345678"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width="60"
        height="60"
        style={{
          borderRadius: "50%",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
        }}
      />
    </a>
        <AppHero />
        <Card/>
        <AppBlog />
        
      </main>
      
    </div>
  );
}

export default Home;
