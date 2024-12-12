import { useState } from 'react';
import Logo from "./images/logo check.png"
function Navbar(){
    let [toggle, setToggle] = useState(false)
  function navBar() {
setToggle(!toggle)
  }
  
    return(
        <>
<nav className='intro' id='intro'>
 
 <div className='container' id='section1'>
 <div id='section1'>
 <a href="#section1"><img src={Logo} className='logo'></img></a>
</div>

   
 <a id='button' onClick={navBar}>
   <span className='bar'></span>
   <span className='bar'></span>
   <span className='bar'></span>
 </a>
 <div id='links'className={toggle ?'link' : 'offlink' }>
   <ul>
     <li><a href="#section1" onClick={navBar}>Home</a></li>
     <li><a href='#section2' onClick={navBar}>Services</a></li>
     <li><a href='#section3' onClick={navBar}>About</a></li>
   <li><a href='#section4' onClick={navBar}>Appointment</a></li>
   <li><a href='#section5' onClick={navBar}>Pet news</a></li>
   <li><a href='#section6' onClick={navBar}>vets</a></li>
   <li><a href='#section7' onClick={navBar}>contact</a></li>
   </ul>
   
 </div>
</div>

</nav>

        </>
    )
}
export default Navbar;