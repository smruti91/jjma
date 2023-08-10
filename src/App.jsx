import Banner from "./components/Banner/Banner";
import Breakfast from "./components/Breakfast/Breakfast";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Product from "./components/product/Product";
import Why from "./components/Why/Why";
import Header from "./components/header/header";
import css from './styles/app.module.scss';
import Contactus from "./components/ContactUs/Contactus";

const App = () => {
 
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero />
    <People />
    <AboutUs />
    <Why/>
    <Banner />
    <Breakfast />
    <Product />
    <Contactus />
    <Footer />
  </div>
};

export default App;
