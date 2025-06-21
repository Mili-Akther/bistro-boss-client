import React from 'react';
import MenuItems from '../../../shared/MenuItems/MenuItems';
import Cover from '../../../shared/Cover/Cover';

const MenuCategory = ({items , title, img}) => {
      return (
        <div className='pt-10'>
         {title && <Cover img={img} title={title}></Cover>}
          <div className="grid md:grid-cols-2 gap-10 my-16">
            {items.map((item) => (
              <MenuItems key={item._id} item={item}></MenuItems>
            ))}
          </div>
        </div>
      );
};

export default MenuCategory;