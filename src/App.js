
import './App.css';
import './index.css';
import Form from './components/Form';
import News from './components/News';
import Vetenarians from './components/Vetenarians';
import Testimonials from './components/Testimonials';


import image3 from './images/chihuahua.jpg';
import image4 from './images/dotted dog.jpg';
import image5 from './images/dog on grass.jpg';
import image6 from './images/scary dog.jpg';

import image20 from './images/24 hour care.jpg'

import image25 from './images/surgery.jpg'

import image30 from './images/facebook.jpg'
import image31 from './images/youtube.jpg'
import image32 from './images/instagram.jpg'
import imageAbout from './images/about vet.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog} from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons/faUserDoctor';
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons/faSuitcaseMedical';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
//THIS IS THE LOGO//
import Logo from "./images/logo.jpg"
function App() {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll:1
  }
  

  var subscribevalue = "SUBSCRIBE";
  
  let [toggle, setToggle] = useState(false)
  function navBar() {
setToggle(!toggle)
  }
  
 
  return (
    <>
 <div className='app'>

 <nav className='intro' id='intro'>
 
  <div className='container' id='section1'>
  
    <img src={Logo} className='logo'></img>
 

    
  
  
  <a id='button' onClick={navBar}>
    <span className='bar'></span>
    <span className='bar'></span>
    <span className='bar'></span>
  </a>
  <div id='links'className={toggle ?'link' : 'offlink' }>
    <ul>
      <li><a href="#section1">Home</a></li>
      <li><a href='#section2'>Services</a></li>
      <li><a href='#section3'>About</a></li>
    <li><a href='#section4'>Appointment</a></li>
    <li><a href='#section5'>Pet news</a></li>
    <li><a href='#section6'>vets</a></li>
    <li><a href='#section7'>contact</a></li>
    </ul>
    
  </div>
 </div>
 
 </nav>
 <div className='why_title' id='section2'>
  <h2>Top Services</h2>
 </div>
 <div className='why_us'>
 <section>
 <FontAwesomeIcon icon={faUserDoctor} beat size='2xl' />
    <h6>Surgery</h6>
   </section>
   <section>
  <FontAwesomeIcon icon={faSuitcaseMedical} beat size="2xl" />
    <h6>24 Hour Care</h6>
    </section>
  <section>
  <FontAwesomeIcon icon={faMessage} beat size="2xl" />
  <h6>Online-vet support</h6>
  </section>
 </div>
 <div className='services_container' id='section3'>
  <h2>Why Us?</h2>
  
   <img src={imageAbout}></img>
    <p>At Riverdale animal clinic, we are dedicated to providing exceptional veterinary care to the beloved pets of our community. Our state-of-the-art facility is equipped with the latest technology and staffed by a team of compassionate and experienced veterinary professionals.</p>
  <br></br>
  <p>Our mission is to deliver personalized, top-quality care to each and every one of our patients. We understand that your pet is a cherished member of your family, and we are committed to treating them with the same love, care, and respect that we would give to our own pets.</p>
  <br></br>
  <p>Our veterinary team is led by Michael Smosh, a highly respected and experienced veterinarian with a passion for delivering exceptional care. Our support staff is equally dedicated, with a collective goal of providing outstanding customer service and ensuring that every visit to our clinic is a positive and stress-free experience.</p>
  <br></br>
  <p>At Riverdale animal clinic, we believe in staying at the forefront of veterinary medicine, and we regularly attend continuing education seminars and workshops to ensure that we are always up-to-date on the latest treatments and technologies.</p>
  <br></br>
  <p>We are proud to be an integral part of the local community, and we are honored to have the trust of so many pet owners. If you are looking for a veterinary partner who truly cares, we invite you to explore our website, meet our team, and discover the difference that exceptional care and compassion can make.</p>
  
</div>

    
  
 
 <div className='news_and_form'>
  <div className='form' id='section4'>
    <Form/>
   </div>
    
  <div className='news_container' id='section5'>
    <h2>PET NEWS</h2>
      <News/>
  </div>
 </div>
 <div className='prices'>
  
  <section>
    <img src={image3}></img>
  </section>
  <section>
  <img src={image4}></img>
  </section>
  <section>
  <img src={image5}></img>
  </section>
  <section>
    <p><img src={image6}></img></p>
  </section>
  
 </div>
 
<div id='section6'>
  <Vetenarians/>
  </div>
<div className='testimonial'>
  <Testimonials/>
 </div>
 
 <div className='footer_container' id='section7'>

  
 <FontAwesomeIcon icon={faShieldDog} size="2xl" style={{color: "#74C0FC",}} />
      <p>"Stay updated with our latest news,</p>
      <p> tips, and promotions by 
      following us</p> 
      <p>on social media platforms today!":</p>
  <div className='footer'>
    
    
      <section>
      <a href='https://facebook.com' target='_self'><img src={image30}></img></a>
      </section>
      <section>
      <a href='https://youtube.com' target='_self'><img src={image31}></img></a>
      </section>
      <section>
      <a href='https://instagram.com' target='_self'><img src={image32}></img></a>
      </section>
    
 
  
  </div>
  <h2>Created by Girish Tibatina</h2>
 </div>
 

 </div>
</>
  );
}
export default App;
