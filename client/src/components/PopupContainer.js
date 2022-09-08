import React, { useState } from 'react';
import Popup from './Popup';
 
function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const cities = [
    {
      nameCity: "Mental Health and Happiness"
    },
    {
      nameCity: "Depression and Anxiety"
    },
    {
        nameCity: "Basic Counselling"
      }
  ];

  const [activeCity, setActiveCity] = useState(0);

  const randomCities = e => {
    const len = cities.length;
    setActiveCity(Math.floor(Math.random() * len));
  };

  
 
  return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={() => {
        togglePopup();
        randomCities();
     }}
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    {isOpen && <Popup
      content={<>
        <b>We checked your answers</b>
        <p>{cities[activeCity].nameCity}</p>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default App;