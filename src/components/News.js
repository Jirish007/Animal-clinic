import image50 from './images/how to train your pet.jpg';
import image40 from './images/dogs.jpg'


import { useState } from 'react';
function News() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };



    return(
<>
<div className='news_container' id='section5'>
<h2>PET NEWS</h2>
<div>
{isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Modal Title</h2>
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>This is the modal content.</p>
            </div>
          </div>
        </div>
      )}

</div>




<div className='news_main_articles'>
<section>
    <p><img src={image40} onClick={handleOpen}
        style={{ cursor: 'pointer' }}
></img></p>
    <p><h4><a href='#'>While some dogs tend to be</a></h4></p>
    <cite>June 12</cite>
</section>
<section>
<p><img src={image50}
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
<cite>"updated"</cite>

</div>
</>
    );
}
export default News;