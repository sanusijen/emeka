import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import AppHero from '../components/hero'; // Corrected relative path;
import AppBlog from '../components/blog';

import Card from '../components/slider'
function Home() {
  return (
    <div className="App">
      <main>
      
        <AppHero />
        <Card/>
        <AppBlog />
        
      </main>
      
    </div>
  );
}

export default Home;
