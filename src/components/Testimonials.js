import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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
        <h2>Testimonials</h2>
        <br></br>
        <Slider {...settings}>
        
<div className="testimonial_card">
<p>Sandton animal clinic saved my dog from cancer and now he is as lively as ever.
    Thanks to the great vetenarians that are giving their all to save lives.
</p>
<h4>Gregory Peterson</h4>
</div>
<div className="testimonial_card">
<p>One of the best clinics out there, really was an amazing experience knowing your pet is well taken care of</p>
<h4>Johnson Bergley</h4>
</div>
<div className="testimonial_card">
    <p>Excellent service as always keep it up</p>
    <h4>Thabo Mayima</h4>
</div>
        </Slider>
        </>
    )
}
export default Testimonials;