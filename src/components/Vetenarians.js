
import vet1 from './images/Anna.webp';
import vet2 from './images/Jerry.webp';
import vet3 from './images/Mike.webp';


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
<div id='section6'>
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
</div>
</>
);
}
export default Vetenarians;