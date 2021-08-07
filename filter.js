import {pies} from "./data.js"
    
const filterPies = (array, instructor) => {
    return array.filter(pieObject => pieObject.instructor === instructor);
}

export {filterPies};