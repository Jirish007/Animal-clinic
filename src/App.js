
import './App.css';
import './index.css';
import Form from './components/Form';
import News from './components/News';
import Vetenarians from './components/Vetenarians';
import Testimonials from './components/Testimonials';

import image1 from './images/dog and cat.jpg';
import image2 from './images/royal blue.jpg';
import image3 from './images/chihuahua.jpg';
import image4 from './images/dotted dog.jpg';
import image5 from './images/dog on grass.jpg';
import image6 from './images/scary dog.jpg';
import image10 from './images/cat.jpg';
import image20 from './images/24 hour care.jpg'
import image21 from './images/book service.jpg'
import image22 from './images/experienced pro staff.jpg'

import image25 from './images/surgery.jpg'
import image26 from './images/in-home consultant.jpg'
import image27  from './images/insured checked.jpg'

import image30 from './images/facebook.jpg'
import image31 from './images/youtube.jpg'
import image32 from './images/instagram.jpg'
import { useState } from 'react';



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
  <div className='container'>
  
  <div className='logo'>
  <h1>Sandton Animal Clinic</h1>

  </div>
  <a id='button' onClick={navBar}>
    <span className='bar'></span>
    <span className='bar'></span>
    <span className='bar'></span>
  </a>
  <div id='links'className={toggle ?'link' : 'offlink' }>
    <ul>
      <li><a href={<Testimonials/>}>HOME</a></li>
      <li><a href='#'>ABOUT</a></li>
      <li><a href='#'>SERVICES</a></li>
    <li><a href='#'>PAGES</a></li>
    </ul>
    
  </div>
 </div>
 </nav>
 <div className='why_title'>
  <h2>Our Services</h2>
 </div>
 <div className='why_us'>
  <section>
    <p><img src={image25}></img></p>
    <a id='button' onClick={navBar}>
    <span className='bar'></span>
    <span className='bar'></span>
    <span className='bar'></span>
  </a>
    <h6>Surgery</h6>
    <p>Our vetenarians can perform orthopedic and soft tissue surgeries your pet may require</p>
  </section>
  <section>
  <p><img src={image20}></img></p>
    <h6>24 Hour Care</h6>
    <p>Our vetenarians can perform orthopedic and soft tissue surgeries your pet may require</p>
  </section>
  
  
 </div>
 <div className='services_container'>
  <h2>Why Us?</h2>
  <div className='services'>
    <div className='down'>
    <section>
    <p><img src={image26}></img></p>
      <h6>In-Home Consultation</h6>
      
    </section>
    </div>
    <section>
      <p><img src={image27}></img></p>
      <h6>Insured Checked</h6>
      
    </section>
    <section>
    <p><img src={image21}></img></p>
      <h6>Book Service 24/7</h6>
    
    </section>
    <div className='down'>
    <section>
    <p><img src={image22}></img></p>
      <h6>Experienced, pro staff</h6>
      
    </section>
    </div>
  </div>
 </div>
 <div className='news_and_form'>
  <div className='form'>
    <Form/>
  </div>
  <div className='news_container'>
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
 

  <Vetenarians/>
<div className='testimonial'>
  <Testimonials/>
 </div>
 
 <div className='footer_container'>
  <div className='footer'>
    <section>
      <img src={image10}></img>
      <p>Loem ipsum dolor sit amet<br></br>
      consectetur adipising elit Blanditis totam<br></br>
      Impedit recusandae voluptatibus
      </p>
      <p>Lorem ipsum dolor:</p>
    
      <img src={image30}></img>
      <img src={image31}></img>
      <img src={image32}></img>
    </section>
    <section>
      <h4>Working Hours</h4>
      <table>
        <tr>
          <th>Days</th>
          <th>Time</th>
        </tr>
        <hr></hr>
        <tr>
          <td>Monday</td>
          <td>9 t0 7</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>9 to 7</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>9 to 7</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>9 to 7</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>9 to 7</td>
        </tr>
      </table>
    </section>
    <section>
      <h4>Info</h4>
      <p>Lorem ipsum dolor</p>
      <p>lorem ipsum dolor</p>
      <p>lorem</p>
      <p>lorem ipsum</p>
      <p>lorem</p>
    </section>
    <section>
      <h4>Newsletter</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipising elit Nisi</p>
      
    </section>
  </div>
 </div>
 </div>
</>
  );
}
export default App;
