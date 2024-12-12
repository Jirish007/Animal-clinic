import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons/faUserDoctor';
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons/faSuitcaseMedical';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
function Services(){
return(
    <>

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

    </>
)
}
export default Services;