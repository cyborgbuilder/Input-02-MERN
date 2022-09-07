import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
function InputData() {

    const [cats, setCats] = useState([
        {
            answerOne: "",
            answerTwo: "",
            answerThree: ""
        }
    ])

     useEffect(() => {
         fetch("http://localhost:3001/")
         .then((res) => res.json())
         .then((jsonRes) => setCats(jsonRes))
     }, []);

    useEffect(() => {
        console.log(cats);
    }, [cats]);

  return (
    <Container>
      {cats.map(cat => {
        return (
            <h1>{cat.title}</h1>
        )
      })}

     
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 50vh;
    border: 1px solid black;

`
export default InputData
