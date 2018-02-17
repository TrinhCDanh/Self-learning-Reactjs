const uuidv4 = require('uuid/v4');

let Items = [
  {
    id   : uuidv4(),
    name : "Trinh folder can be referenced from the HTML",
    level: 0
  },
  {
    id   : uuidv4(),
    name : "Cong folder can be referenced from the HTML",
    level: 1
  },
  {
    id   : uuidv4(),
    name : "Danh folder can be referenced from the HTML",
    level: 2
  }
];

export default Items;