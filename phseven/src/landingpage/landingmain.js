import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/css/style.css';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import Middlecontent from "./middlecontent";
import Footer from "./footer";



const landingmain = () => {

  return (
    
    <> 
    <Header/>
    <Middlecontent/>
    <Footer/>
    </>

  );
};

export default landingmain;
