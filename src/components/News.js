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
              <p> Despite their natural instincts as predators and competitors, some dogs surprisingly tend to like cats. This unusual affinity can be attributed to socialization and individual temperament. Dogs that are exposed to cats from an early age, particularly during their critical puppy socialization period, are more likely to develop a positive association with felines. This early exposure helps them understand that cats are not threats, but rather companions.
              </p>
              <br></br>
              <p> Additionally, certain breeds and individual dogs with calm and gentle personalities are more inclined to coexist peacefully with cats. Breeds such as Labradors, Golden Retrievers, and Cavalier King Charles Spaniels are often known for their friendly and affectionate nature, making them more likely to get along with cats. Ultimately, the key to a harmonious dog-cat relationship lies in proper socialization, training, and individual temperament. </p>
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
              <p> Training your pet at home can be a rewarding and cost-effective way to strengthen your bond and improve their behavior. To start, establish a routine and set clear goals for what you want to achieve. Choose a quiet and distraction-free area for training, and use positive reinforcement techniques such as treats, praise, and affection.
              </p>
              <br></br>
              <p> 
Begin with simple commands like "sit," "stay," and "come," and gradually increase the difficulty level as your pet becomes more confident. Be consistent and patient, as training can take time. Use visual cues like hand signals and props to help your pet understand what you want them to do.
  </p>
  <br></br>
  <p> 
  Additionally, make sure to reward good behavior and avoid punishing bad behavior, as this can create anxiety and undermine the training process. With time, effort, and positive reinforcement, you can train your pet at home and enjoy a stronger, more loving relationship.  </p>
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
              <p>  When it comes to caring for pets, some individuals stand out for their exceptional dedication, compassion, and expertise. Veterinarians, veterinary technicians, and animal behaviorists are often considered among the best caregivers for pets. These professionals possess in-depth knowledge of animal behavior, physiology, and psychology, enabling them to provide top-notch care.
              </p>
              <br></br>
              <p>
Additionally, experienced pet groomers, pet sitters, and dog walkers also play a vital role in ensuring the physical and emotional well-being of pets. These caregivers provide essential services such as exercise, socialization, and hygiene, helping to maintain pets' overall health and happiness.
 </p>
              <br></br>
              <p>  
              Moreover, many animal shelters and rescue organizations are staffed by compassionate and dedicated individuals who work tirelessly to care for abandoned, abused, and neglected animals. These caregivers provide a safe haven, medical attention, and loving care to pets in need, helping them to recover and find forever homes.         </p>
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
              <p>  Dogs are widely regarded as one of the best companions humans can have. Their unwavering loyalty, affection, and ability to provide comfort make them an invaluable addition to many families. Dogs have a unique capacity to sense their owner's emotions, providing solace and support during difficult times.
              </p>
              <br></br>
              <p> Their intelligence, trainability, and eagerness to please make them highly versatile, from assisting individuals with disabilities to serving as search and rescue animals. Dogs also promote physical activity, encouraging their owners to engage in regular exercise, such as walking or running.
              </p>
              <br></br>
              <p>  
              Moreover, the bond between a dog and their owner can have a profound impact on mental health, reducing stress and anxiety while fostering a sense of connection and belonging. With their tails wagging and hearts full of love, dogs bring immense joy and companionship to countless lives, making them truly the best.              </p>
              
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