import './App.css';
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';
import Pilares from './components/Pilares/Pilares';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
<Menu />
<Slider />
<Content />
<Pilares />
<Footer />
    </div>
  );
}

export default App;
