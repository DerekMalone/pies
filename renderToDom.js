const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
}

//display buttons on the DOM
const buttons = () => {
  
    const domString = `
    <button type="button" class="btn btn-primary" id="All">All</button>
    <button type="button" class="btn btn-secondary" id="Trinity">Trinity</button>
    <button type="button" class="btn btn-success" id="Aja">Aja</button>
    <button type="button" class="btn btn-danger" id="Doc">Doc</button>
    `;
  
    renderToDom("#buttonContainer", domString);
  };

//display form on the DOM
const pieForm = () => {
  
   //Use an object from above to require all necessary info
        
     const domString = `
              <form id="pieFormForm">
              <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input required type="text" class="form-control" id="name" >
              </div>
              <div class="mb-3">
                  <label for="ingredients" class="form-label">Ingredients</label>
                  <input required type="text" class="form-control" id="ingredients" >
              </div>
              <div class="mb-3">
                  <label for="bakeTemp" class="form-label">Bake Temp</label>
                  <input required type="number" class="form-control" id="bakeTemp" >
              </div>
              <div class="mb-3">
                  <label for="drinkPairing" class="form-label">Drink Pairing</label>
                  <input required type="text" class="form-control" id="drinkPairing" >
              </div>
              <div class="mb-3">
                  <label for="imageUrl" class="form-label">Image Url</label>
                  <input required type="url" class="form-control" id="imageUrl" >
              </div>
              <div class="mb-3">
                  <label for="instructor" class="form-label">Instructor</label>
                  <input required type="text" class="form-control" id="instructor" >
              </div>
              <div class="mb-3">
                  <label for="iceCream" class="form-label">Ice Cream</label>
                  <input required type="text" class="form-control" id="iceCream" >
              </div>
              
              <button type="submit" class="btn btn-primary">Submit</button>
              </form>
      `;
          
      renderToDom("#pieForm", domString);
};

// Function that passes html to the DOM
const pieBuilder = (piesArray) => {
    let domString = "";
    piesArray.forEach((pie, i) => {
        domString += `
        <div class="card" style="width: 18rem;">
        <img src="${pie.imageUrl}" class="card-img-top" alt="${pie.name}">
        <div class="card-body">
          <h5 class="card-title">${pie.name}</h5>
          <p class="card-text">${pie.ingredients}</p>
          <button type="button" id="${i}" class="btn btn-primary">Delete</button>
        </div>
      </div>
      `;
    });

    renderToDom("#piesContainer", domString);
}

export { buttons, pieForm, pieBuilder }