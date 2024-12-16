import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
//THESE ARE THE IMAGES FOR THE TESTIMONY SECTION OF TE WEBSITE
import Person1 from './images/out-person1.webp'
import Person2 from './images/out-person2.webp'
import Person3 from './images/out-person3.webp'
function Testimonials() {

    
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll:1,
    arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
      };
    
    return(
    <>
        <div className='testimonial'>
        <h2>Testimonials</h2>
        <br></br>
        <Slider {...settings}>
        
<div className="testimonial_card">
<p>Sandton animal clinic saved my dog.
    Thanks to the great vetenarians that are giving their all to save lives.
</p>
<img src={Person1}></img>
<h4>Gregory Peterson</h4>
</div>
<div className="testimonial_card">
<p>One of the best clinics out there, really was an amazing experience knowing your pet is well taken care of</p>
<img src={Person2}></img>
<h4>Amachawa Inke</h4>
</div>
<div className="testimonial_card">
    <p>Excellent service as always keep it up, truly their services can not be matched.From surgery to health care they got it all</p>
    <img src={Person3}></img>
    <h4>Xing Cai</h4>
</div>
        </Slider>
        </div>
        </>
    )
}
export default Testimonials;