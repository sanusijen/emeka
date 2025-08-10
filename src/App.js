import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Programs from './pages/programs';
import Proposed from './pages/proposed';
import January from './pages/january';
import February from './pages/february';
import March from './pages/march';
import April from './pages/april';
import May from './pages/may';
import June from './pages/june';
import July from './pages/july';
import August from './pages/august';
import September from './pages/september';
import October from './pages/october';
import November from './pages/november';
import December from './pages/december';
import AppHeader from './components/header';
import AppFooter from './components/footer';


function App() {
  return (
    <div className="App">
           
      <Router>
      <header id='header'>
        <AppHeader />
      </header>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/proposed" element={<Proposed />} />
          <Route path="/january" element={<January />} />
          <Route path="/february" element={<February />} />
          <Route path="/march" element={<March />} />
          <Route path="/april" element={<April />} />
          <Route path="/may" element={<May />} />
          <Route path="/june" element={<June />} />
          <Route path="/july" element={<July />} />
          <Route path="/august" element={<August />} />
          <Route path="/september" element={<September />} />
          <Route path="/october" element={<October />} />
          <Route path="/november" element={<November />} />
          <Route path="/december" element={<December />} />
        </Routes>
      </Router>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
