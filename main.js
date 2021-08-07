import {pies} from "./data.js";

import  { buttons, pieForm, pieBuilder} from "./renderToDom.js";

import {buttonEvents, handleButtonClick, pieFormEvents, deletePie, handleFormSubmit} from "./eventHandlers.js";

import {filterPies} from "./filter.js";

const init = () => {
    //this starts the app
    buttons(); //Put DOM elements first
    buttonEvents(); //Event listeners after
    pieBuilder(pies); 
    pieForm();
    pieFormEvents();
}

init();