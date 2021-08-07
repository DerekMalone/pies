 import {pies} from "./data.js"

 import {buttons, pieForm, pieBuilder} from "./renderToDom.js";

//Handles the button events
const buttonEvents = () => {
    document.querySelector('#buttonContainer')
    .addEventListener('click', handleButtonClick);
    
    document.querySelector("#piesContainer").addEventListener("click", deletePie);
  }

 //Takes info passed into the form and pushes it into the array
 const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const newPie =  {
        name: document.querySelector("#name").value,
        ingredients: document.querySelector("#ingredients").value,
        bakeTemp: document.querySelector("#bakeTemp").value,
        drinkPairing: document.querySelector("#drinkPairing").value,
        imageUrl:
        document.querySelector("#imageUrl").value,
        instructor: document.querySelector("#instructor").value,
        iceCream: document.querySelector("#iceCream").value,
      }
  
      pies.push(newPie)
      pieBuilder(pies);
  };   

   //Deletes a specific pie in the array
   const deletePie = (event) => {
      
    const targetType = event.target.type
    const targetId = event.target.id

    if(targetType === "button") {
      pies.splice(targetId, 1);
      pieBuilder(pies);
    }
  };

  const pieFormEvents = () => {
      const pieForElement = document.querySelector("#pieForm");
      pieForElement.addEventListener("submit", handleFormSubmit);
  }

  // Function that adds an event listener to each button and calls funtions when called.
const handleButtonClick = (event) => {
  
    const pieArray = filterPies(pies, event.target.id)
  
    if (event.target.id === "All" || event.target.id ==="buttonContainer") {  
        pieBuilder(pies);
      } else {
          pieBuilder(filterPies(pies, event.target.id))
      }
  
  }

  export {buttonEvents, handleButtonClick, pieFormEvents, deletePie, handleFormSubmit};