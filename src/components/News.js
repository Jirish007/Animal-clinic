import image50 from './how to train your pet.jpg';
import image40 from './dogs.jpg'


import { useState } from 'react';
function News() {
    const [isOpen1, setIsOpen1] = useState(false);

const handleClick1 = () => {
  
  setIsOpen1(true);
};

const handleClose1 = () => {
  setIsOpen1(false);
};
const [isOpen2, setIsOpen2] = useState(false);
  
    const handleClick2 = () => {
      setIsOpen2(true);
    };
  
    const handleClose2 = () => {
      setIsOpen2(false);
    };


    return(
<>
<div className='franchise'>
{isOpen1 && (
        <div className="popup1">
          <div className="popup1-content">
            <span className="close1" onClick={handleClose1}>
              &times;
            </span>
            <p>hvbhvkkjbkjb</p>
          </div>
        </div>
      )}

{isOpen2 && (
        <div className="popup2">
          <div className="popup2-content">
            <span className="close2" onClick={handleClose2}>
              &times;
            </span>
            <p>Popup text goes here...</p>
          </div>
        </div>
      )}
</div>



<div className='news_containers'>


<div className='news_main_articles'>
<section>
    <p><img src={image40} onClick={handleClick1}
        style={{ cursor: 'pointer' }}
></img></p>
    <p><h4><a href='#'>While some dogs tend to be</a></h4></p>
    <cite>June 12</cite>
</section>
<section>
<p><img src={image50} onClick={handleClick2}
        style={{ cursor: 'pointer' }}></img></p>
   <p> <h4><a href='#'>How to train your pet at home?</a></h4></p>
    <cite>June 13</cite>
</section>
</div>
<div className='news_article'>
    <section>
    <h4>13<br></br> Feb</h4>
    
    </section>
    <br></br>
    <section>
   
        <h4><a href='#'>The best care takers of any kinds of pets</a></h4>
        <hr></hr>
    </section>
    <section>
        <h4>13<br></br> Feb</h4>
    </section>
    <br></br>
    <section>
        <h4><a href='#'>Why dogs are the best?</a></h4>
        <hr></hr>
    </section>
</div>
</div>
</>
    );
}
export default News;