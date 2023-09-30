import {React, useState} from "react";


function Item({ name, category }) {
  const [addItem, setAddItem] = useState(false);
  let addItemClassName = addItem ? 'in-cart' : '';
  let textValueOfButton = addItem ? 'Remove From Cart': 'Add to Cart';
  
  return (
    <li className={addItemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setAddItem(!addItem)}>{textValueOfButton}</button>
    </li>
  );
}

export default Item;
