import React, {useState} from 'react'
import axios from 'axios'
import './styled.css'
import Popup from './Popup';
import styled from 'styled-components';

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

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
  
    const cities = [
      {
        nameCity: "Stress Management"
      },
      {
        nameCity: "Mental Health Counseling"
      },
      {
          nameCity: "Career Guiding"
      },
      {
        nameCity: "Physical Health Guiding"
      },
      {
        nameCity: "Relationship Maintenance"
      },
      {
        nameCity: "Anxiety Management"
      },
      {
        nameCity: "Anger Management"
      }

    ];
  
    const [activeCity, setActiveCity] = useState(0);
  
    const randomCities = e => {
      const len = cities.length;
      setActiveCity(Math.floor(Math.random() * len));
    };
  

  


  return (
    <Container>
     <Wrap>
      <Header>
        <h1>TAKE A COURSE</h1>
        <p>You can take a course which is more suitable for your issues and you can empower and lead a healthy and fulfilling life so choose one out of the below mentioned courses of treatments.</p>
        
      </Header>
      <Ins>
        <h4>Follow these instructions to obtain a course:</h4>
        <p>Fill up all the questions which are about the issues that you might have faced.
We will recommend you a course
click submit to enroll</p>
      </Ins>
     <form>

<Slot>
    <h1>Do you consider yourself to be spiritual or religious?</h1>
    <br></br>
    <br></br>
    <input type='radio' name='answerOne' value="No" onChange={handleChange} />
    <label>Yes</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerOne' value="No" onChange={handleChange} />
    <label>No</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerOne' value="No" onChange={handleChange} />
    <label>Prefer Not to Say</label>
</Slot>

<Slot>
    <h1>Have you ever been to meet a counselor before?</h1>
    <br></br>
    <br></br>
    <input type='radio' name='answerTwo' value="first" onChange={handleChange} />
    <label>Yes</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerTwo' value="second" onChange={handleChange} />
    <label>No</label>
    <br></br>
    <br></br>
</Slot>

<Slot>
    <h1>What led you to consider about meeting a counselor online?</h1>
    <br></br>
    <br></br>
    <input type='radio' name='answerThree' value="yes" onChange={handleChange} />
    <label>I’ve been feeling depressed</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>I am grieving</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>I can’t concentrate on studying</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>Other</label>
</Slot>

<Slot>
    <h1>What are your expectations that you want from your counselor?</h1>
    <br></br>
    <br></br>
    <input type='radio' name='answerThree' value="yes" onChange={handleChange} />
    <label>Understanding</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>Privacy</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>I don’t know</label>
</Slot>

<Slot>
    <h1>How would you rate your current physical health?</h1>
    <br></br>
    <br></br>
    <input type='radio' name='answerThree' value="yes" onChange={handleChange} />
    <label>Good</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>Fair</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>Poor</label>
</Slot>

<Slot>
    <h1>Are you currently experiencing overwhelming sadness, grief or depression? </h1>
    <br></br>
    <br></br>
    <input type='radio' name='answerThree' value="yes" onChange={handleChange} />
    <label>Yes</label>
    <br></br>
    <br></br>
    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>No</label>
</Slot>

<Slot>
    <h1>Are you interested or pleasured in doing things over the past 2 weeks?</h1>
    <br></br>
    <br></br>
    <input type='radio' name='answerThree' value="yes" onChange={handleChange} />
    <label>Yes</label>
    <br></br>
    <br></br>
    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>No</label>
</Slot>

<Slot>
    <h1>Are you currently having a trouble of falling asleep, staying asleep or sleeping a way too much?</h1>
    <br></br>
    <br></br>
    <input type='radio' name='answerThree' value="yes" onChange={handleChange} />
    <label>Yes</label>
    <br></br>
    <br></br>
    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>No</label>
</Slot>

<Slot>
    <h1>Have you been bothered by feeling bad about yourself or that you are a failure or have let you self or your family down?</h1>
    <br></br>
    <br></br>
    <input type='radio' name='answerThree' value="yes" onChange={handleChange} />
    <label>Yes</label>
    <br></br>
    <br></br>

    <input type='radio' name='answerThree' value="no" onChange={handleChange} />
    <label>No</label>
</Slot>

<input
type="button"
value="Submit"
style={{border: 'none', outline: 'none', borderRadius: '5px', background: '#4adcc1', padding: '15px 25px', margin: '20px 0', cursor: 'pointer', fontSize: '25px'
}}
onClick={() => {
togglePopup();
randomCities();
handleClick();
}}
/>

<Pop>
{isOpen && <Popup
content={<>
<h1>We checked your answers</h1>
<p>We recommend you to take <b>{cities[activeCity].nameCity} </b> Course</p>
<button>Go To Course</button>
</>}
handleClose={togglePopup}
/>}
</Pop>
</form>

<ImageBox style={{background: "url('/images/doctor.svg')",backgroundSize: 'cover', top: "10%", left: "10%"}}></ImageBox>

<ImageBox style={{background: "url('/images/doctor3.svg')", top: "140%", right: "0"}}></ImageBox>
     </Wrap>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eae9e9;

` 

const Wrap = styled.div`
  width: 95%;
  z-index: 1000;


`
const Header = styled.div`
  margin: 40px 0;

  h1{
    text-align: center;
    font-size: 80px;
  }
  p{
    font-size: 22px;
    text-align: center;
  }

`
const Slot = styled.div`
  margin: 20px 0;
  background: #3bb19b;
  border-radius: 15px;
  padding: 20px;
  opacity: 0.85;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 

  &:hover{
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    cursor: pointer;
  }
  h1{
    text-align: left;
    font-size: 28px;
  }
  label{
    font-size: 18px;
    margin: 0 5px; 
  }
`

const Pop = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: url('./images/doctor3.svg');
background-size: cover;
  h1{
    text-align: center;
    margin: 10px 0;
  }
  button{
    width: 100%;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 18px;
    margin: 20px 0;
    background: #4adcc1;

    &:hover{
      cursor: pointer;
    }
    
  }

  p{

    font-size: 20px;
    margin-top: 20px;
    text-align: center;
  }

`

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      content: "\f005";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }
  &:checked + ${RadioButtonLabel} {
    background: yellowgreen;
    border: 1px solid yellowgreen;
    &::after {
      content: "\f005";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;

const ImageBox = styled.div`
    width: 1000px;
    height: 600px;
    z-index: -1000;
    position: absolute;
`

const Ins = styled.div`


`

export default Notes