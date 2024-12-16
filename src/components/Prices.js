
import image3 from './images/chihuahua.jpg';
import image4 from './images/dotted dog.jpg';
import image5 from './images/dog on grass.jpg';
import image6 from './images/scary dog.jpg';
function Prices(){
return(
    <>
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
    </>
)
}
export default Prices;