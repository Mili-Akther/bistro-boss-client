import React from 'react';
import Category from '../category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Banner from '../Banner/Banner';
import BistroSection from '../BistroSection/BistroSection';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Category></Category>
                  <BistroSection></BistroSection>
                  <PopularMenu></PopularMenu>
            </div>
      );
};

export default Home;