import { lazy,Suspense } from 'react';
import './index.css';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
//THIS IS THE SECTION FOR LAZY LOADING REACT COMPONENTS AND IMAGES FOR SPEED//
const Form = lazy(()=>import("./components/Form"))
const News = lazy(()=>import("./components/News"))
const Vetenarians = lazy(()=>import("./components/Vetenarians"))
const Testimonials = lazy(()=>import("./components/Testimonials"))
function App() {
return (
<>
<div className='app'>
<Navbar/>
 <div className='why_title' id='section2'>
<h2>Top Services</h2>
 </div>
<Services/>
<About/>
 <div className='news_and_form'>
<Suspense fallback={<h1>Loading...</h1>}>
<Form/>
</Suspense>

<Suspense fallback={<h1>Loading</h1>}>
<News/>
</Suspense>
 </div>
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