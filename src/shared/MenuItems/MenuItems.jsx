import React from "react";

const MenuItems = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img style={{borderRadius:'0 200px 200px 200px' }} className="w-[120px]" src={image} alt="" />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItems;
