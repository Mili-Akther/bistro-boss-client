import React from 'react';
import Category from '../category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Banner from '../Banner/Banner';
import BistroSection from '../BistroSection/BistroSection';
import SaladCard from '../SaladCard/SaladCard';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Category></Category>
                  <BistroSection></BistroSection>
                  <PopularMenu></PopularMenu>
                  <SaladCard></SaladCard>
                  <Featured></Featured>
                  <Testimonials></Testimonials>
            </div>
      );
};

export default Home;