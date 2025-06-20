import React from "react";
import bgImage from "../../../assets/home/chef-service.jpg"; 

const BistroSection = () => {
  return (
    <div
      className="bg-cover bg-center py-20 flex items-center justify-center mb-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-10 md:p-16 text-center max-w-4xl rounded shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">BISTRO BOSS</h2>
        <p className="text-sm md:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroSection;
