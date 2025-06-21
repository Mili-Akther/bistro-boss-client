import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.png'
import PopularMenu from '../../home/PopularMenu/PopularMenu';
console.log(menuImg);
const Menu = () => {
      return (
        <div>
          <Helmet>
            <title>Bistro Boss | Menu</title>
          </Helmet>
          <Cover img={menuImg} title= "our menu"></Cover>
          <PopularMenu></PopularMenu>
          <Cover img={menuImg} title= "our menu"></Cover>
          <PopularMenu></PopularMenu>
          <Cover img={menuImg} title= "our menu"></Cover>
          <PopularMenu></PopularMenu>
          <Cover img={menuImg} title= "our menu"></Cover>
          <PopularMenu></PopularMenu>
          <h2>Our Menu</h2>
        </div>
      );
};

export default Menu;