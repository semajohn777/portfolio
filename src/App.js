import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
// import Testimonial from './component/testimonial/Testimonial';
import Navbar from './component/nav/Navbar';
import Potofolio from './component/potofolio/Potofolio';
import Exp from './component/experience/Exp';
//import Try from './component/Try';


function App() {

  return (
    <div className="App">
    <Header/>
    <About/>
    <Exp/>
    <Navbar/>
    <Potofolio/>
    <Contact/>

  
      <Footer />
      {/* <Try/> */}
    
    </div>
  );
}

export default App;
