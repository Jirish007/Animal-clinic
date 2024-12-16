
import image30 from './images/facebook.jpg'
import image31 from './images/youtube.jpg'
import image32 from './images/instagram.jpg'


function Footer(){
    return(
        <>
<div className='footer_container' id='section7'>


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

        </>
    )
}
export default Footer;