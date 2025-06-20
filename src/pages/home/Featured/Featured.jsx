import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
      return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
          <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Check it out"
          ></SectionTitle>
          <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-300/40 '>
            <div>
                  <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
                  <p>Aug 20, 2029</p>
                  <p className='uppercase'> Where Can I Get Some? </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique tenetur totam accusantium perferendis sit voluptatibus dolorum voluptate rerum doloribus quidem, omnis autem. Repellendus velit ratione dignissimos debitis hic sapiente exercitationem numquam totam mollitia ea, voluptate recusandae quam omnis magni, fugiat odio et? Dolores magnam fuga recusandae modi iusto eius!</p>
                  <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
            </div>
          </div>
        </div>
      );
};

export default Featured;