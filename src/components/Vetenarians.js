
import vet1 from './Anna.jpg';
import vet2 from './Jerry.jpg';
import vet3 from './Mike.jpg';
import vet4 from './Sarah.jpg'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from 'react';

function Vetenarians() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll:2,
        arrows: false
      }
      
return(
    <>
    <div className='vetenarians_container'>
    <Slider {...settings}>
 
<div className='vet'>
<p><img src={vet1}></img></p>
</div>
<div className='vet'>
<p><img src={vet2}></img></p>
</div>
<div className='vet'>
<p><img src={vet3}></img></p>
</div>
<div className='vet'>
<p><img src={vet1}></img></p>
</div>
<div className='vet'>
<p><img src={vet2}></img></p>
</div>
<div className='vet'>
<p><img src={vet3}></img></p>
</div>


</Slider>
</div>
<div className="vetenarians_slider">

    <section>
    <h4>Our Vetenarians</h4>
    </section>




</div>
    
</>
);
}
export default Vetenarians;