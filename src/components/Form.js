import { useState } from "react";

function Form() {
let [formData, setFormData] = useState({
    date: "",
    name: "",
    email: "",
    number: "",
    comment: ""

});
const [submitButton, setSubmitButton] = useState(true)
let submit = function(event) {
    event.preventDefault()

   if(formData.name === "" || formData.date === "") {
    alert("Incomplete form")
   }
   else if(formData.number.length < 10 || formData.number === "") {
    alert("check phone number")
   }

   else{
    setSubmitButton(false)
   }
}
const submitValue = "submitted"
const submitStop = () => {
    alert("Form is already submitted")
}
let handleChange = (event)=> {
    //we are grabing all the names accompanied to the event
    const {name, value} = event.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }))
}

return(
<>
    <div className='form' id='section4'>
        <h2>GET AN APPOINTMENT</h2>
        <p>call 0607173434</p>
        <form method="post" onSubmit={submit}>
            <h4>Date And Time</h4>
            <br></br>
            <input 
            type="text" 
            placeholder="mm/dd/yy" 
            
            name="date"
            onChange={handleChange}
            value={formData.date}

            ></input>
            <br></br>
            <h4>Your Name</h4>
            <br></br>
            <input type="text"
             placeholder="John Doe" 
             onChange={handleChange}
             value={formData.name}
             name="name"
             >

            </input>
            <div className="text_section">
                <h4 className="email">Email</h4>
                <h4>Phone</h4>
                </div>
                <div className="form_section">
                    <input type="text" 
                    placeholder="johndoe@gmail.com" 
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    className="email"
                    >

                    </input>
                    <input type="number"
                     placeholder="0608977556" 
                     onChange={handleChange}
                     value={formData.number}
                     name="number"
                     ></input>
            </div>
            <textarea placeholder="Comment here..."
            onChange={handleChange}
            name="comment"
            value={formData.comment}
            ></textarea>
            <br></br>
            {submitButton ? <input type="submit"></input>: <input type="button" value={submitValue} style={{backgroundColor: "green"}} onClick={submitStop}></input>}
        </form>
        </div>
    </>
)
}
export default Form;