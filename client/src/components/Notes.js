import React, {useState} from 'react'
import axios from 'axios'
function Notes() {

    const [input, setInput] = useState({
        //title: '',
        //content: '',
       answerOne: '',
       answerTwo: '',
       answerThree: ''
    })


    function handleChange(event){
        const {name, value, answer} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input);

         const newNote = {
             //title: input.title,
             //content: input.content,
             answerOne: input.answerOne,
             answerTwo: input.answerTwo,
             answerThree: input.answerThree
         }

         axios.post('http://localhost:3001/create', newNote);
    }

  return (
    <div>
      <form>
        {/* <div>
            <input onChange={handleChange} name='title' value={input.title} placeholder='Title' type='text' />
        </div>

        <div>
            <textarea  onChange={handleChange} value={input.content} name='content' placeholder='Content' />
        </div> */}

        <div>
            <h1>Your Gender</h1>
            <input type='radio' name='answerOne' value="Male" onChange={handleChange} />
            <label>Male</label>

            <input type='radio' name='answerOne' value="Female" onChange={handleChange} />
            <label>Female</label>
        </div>

        <div>
            <h1>Acadamic Year</h1>
            <input type='radio' name='answerTwo' value="first" onChange={handleChange} />
            <label>1st Year</label>

            <input type='radio' name='answerTwo' value="second" onChange={handleChange} />
            <label>2nd Year</label>
        </div>

        <div>
            <h1>Age above 18</h1>
            <input type='radio' name='answerThree' value="yes" onChange={handleChange} />
            <label>Yes</label>

            <input type='radio' name='answerThree' value="no" onChange={handleChange} />
            <label>No</label>
        </div>

        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default Notes
