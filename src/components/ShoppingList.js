import {React, useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectCategory, setSelectCategory] = useState('All');

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => setSelectCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => {
          if(selectCategory === 'All'){
            return <Item key={item.id} name={item.name} category={item.category} />
          }
          else if(selectCategory === item.category){
            return <Item key={item.id} name={item.name} category={item.category} />
          }
          //if there it doesn't match return null
          return null;
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
