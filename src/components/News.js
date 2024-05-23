import image50 from './how to train your pet.jpg';
import image40 from './dogs.jpg'
function News() {
    return(
<>
<div className='news_containers'>
<div className='news_main_articles'>
<section>
    <p><img src={image40}></img></p>
    <p><h4><a href='#'>While some dogs tend to be</a></h4></p>
    <cite>June 12</cite>
</section>
<section>
<p><img src={image50}></img></p>
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