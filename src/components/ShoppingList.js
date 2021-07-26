import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState('All')
  
  function handleChange(event) {
    setFilterBy(event.target.value)
  }

  const filteredArr = items.filter((item) => {
    if (filterBy === 'All') {
      return true
    } else {
      return item.category === filterBy
    }
  })
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {console.log(filteredArr)}
        {filteredArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
