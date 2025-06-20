import React from "react";
import Category from "../category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import BistroSection from "../BistroSection/BistroSection";
import SaladCard from "../SaladCard/SaladCard";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import CallUs from "../CallUs/CallUs";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroSection></BistroSection>
      <PopularMenu></PopularMenu>
      <SaladCard></SaladCard>
      <Featured></Featured>
      <CallUs></CallUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
