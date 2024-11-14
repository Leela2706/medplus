import logo from './logo.svg';
import './App.css';
import Loader from './COmponents/Loader';
import Header from './COmponents/Header';
import Slider from './COmponents/Slider';
import Schedule from './COmponents/Schedule';
import Features from './COmponents/Features';
import FunFacts from './COmponents/FunFacts';
import WhyChoose from './COmponents/WhyChoose';
import CallToAction from './COmponents/CallToAction';
import Portfolio from './COmponents/Portfolio';
import Service from './COmponents/Service';
import PricingTable from './COmponents/PricingTable';
import BlogArea from './COmponents/BlogArea';
import Clients from './COmponents/Clients';
import Appointment from './COmponents/Appointment';
import Newsletter from './COmponents/Newsletter';
import Footer from './COmponents/Footer';

function App() {
  return (
    <div className="App">
     {/* <Loader/> */}
     <Header/>
     {/* <Slider/> */}
     <Schedule/>
     <Features/>
     <FunFacts/>
     <WhyChoose/>
     <CallToAction/>
     <Portfolio/>
     <Service/>
     <PricingTable/>
     <BlogArea/>
     <Clients/>
     <Appointment/>
     <Newsletter/>
     <Footer/>
    </div>
  );
}

export default App;
