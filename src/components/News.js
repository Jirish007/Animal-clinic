import image50 from './images/how to train your pet.jpg'
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

//the second modal
const [isOpen2, setIsOpen2] = useState(false);

const handleOpen2 = () => {
setIsOpen2(true);
};

const handleClose2 = () => {
setIsOpen2(false);
};
//this is the third modal
const [isOpen3, setIsOpen3] = useState(false);

const handleOpen3 = () => {
setIsOpen2(true);
};

const handleClose3 = () => {
setIsOpen3(false);
};
//this is the final modal

const [isOpen4, setIsOpen4] = useState(false);

const handleOpen4 = () => {
setIsOpen4(true);
};

const handleClose4 = () => {
setIsOpen4(false);
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
<h2>Why some dogs tend to like cats?</h2>
<button className="close-button" onClick={handleClose}>
&times;
</button>
</div>
<div className="modal-body">
<p> content removed
</p>

</div>
</div>
</div>
)}

</div>
<div>
{isOpen2 && (
<div className="modal2-overlay">
<div className="modal2-content">
<div className="modal2-header">
<h2>How to train your pet at home?</h2>
<button className="close2-button" onClick={handleClose2}>
&times;
</button>
</div>
<div className="modal2-body">
 <p>Content remove</p>
</div>
</div>
</div>
)}
</div>

<div>
{isOpen3 && (
<div className="modal3-overlay">
<div className="modal3-content">
<div className="modal3-header">
<h2>The best care takers of any kinds of pets</h2>
<button className="close3-button" onClick={handleClose3}>
&times;
</button>
</div>
<div className="modal3-body">
 <p>Content removed</p>
</div>
</div>
</div>
)}
</div>
<div>
{isOpen4 && (
<div className="modal4-overlay">
<div className="modal4-content">
<div className="modal4-header">
<h2>Why dogs are the best?</h2>
<button className="close4-button" onClick={handleClose4}>
&times;
</button>
</div>
<div className="modal4-body">
 <p>Content removed</p>
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
<h4 onClick={handleOpen} >Why some dogs tend to like cats?</h4>
<cite>June 12</cite>
</section>
<section>
<p><img src={image50} onClick={handleOpen2}
style={{ cursor: 'pointer' }}></img></p>
 <h4 onClick={handleOpen2} >How to train your pet at home?</h4>
<cite>June 13</cite>
</section>
</div>
<div className='news_article'>
<section>
<h4>13<br></br> Feb</h4>

</section>
<br></br>
<section>
 
<h4 onClick={handleOpen3}>The best care takers of any kinds of pets</h4>
<hr></hr>
</section>
<section>
<h4>13<br></br> Feb</h4>
</section>
<br></br>
<section>
<h4 onClick={handleOpen4} >Why dogs are the best?</h4>
<hr></hr>
</section>
</div>
<cite>"updated"</cite>

</div>
</>
);
}
export default News;