import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setAdded] = useState(false)

  function handleClick() {
    setAdded(!isAdded)
  }

  const inCart = isAdded ? "in-cart" : ""
  const color = isAdded ? "pink" : "yellow"

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{ background: color }} onClick={handleClick} className="add">{ !isAdded ? "Add To Cart" : "Remove From Cart" }</button>
    </li>
  );
}

export default Item;
