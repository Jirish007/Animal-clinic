import { lazy,Suspense } from 'react';
import './index.css';
import Footer from './components/Footer';
//THIS IS THE SECTION FOR LAZY LOADING REACT COMPONENTS AND IMAGES FOR SPEED//
const Navbar = lazy(()=>import("./components/Navbar"))
const Services = lazy(()=>import("./components/Services"))
const About = lazy(()=>import("./components/About"))
const Form = lazy(()=>import("./components/Form"))
const News = lazy(()=>import("./components/News"))
const Prices = lazy(()=>import("./components/Prices"))
const Vetenarians = lazy(()=>import("./components/Vetenarians"))
const Testimonials = lazy(()=>import("./components/Testimonials"))

function App() {
 
  return (
    <>
 <div className='app'>
 <Suspense fallback={<h1>Loading</h1>}>
<Navbar/>
</Suspense>
 
 <div className='why_title' id='section2'>
  <h2>Top Services</h2>
 </div>
 <Suspense fallback={<h1>Loading</h1>}>
<Services/>
</Suspense>

<Suspense fallback={<h1>Loading</h1>}>
<About/>
</Suspense>
    
  
 
 <div className='news_and_form'>
  
    <Suspense fallback={<h1>Loading...</h1>}>
    <Form/>
    </Suspense>
  
    <Suspense fallback={<h1>Loading</h1>}>
      <News/>
      </Suspense>
 </div>
 
 <Suspense fallback={<h1>Loading...</h1>}>
<Prices/>
</Suspense>
  <Suspense fallback={<h1>Loading...</h1>}>
  <Vetenarians/>
  </Suspense>
  

  <Suspense fallback={<h1>Loading</h1>}>
  <Testimonials/>
  </Suspense>
 
 <Footer/>
 

 </div>
</>
  );
}
export default App;
