import React from 'react';

const FoodCard = ({item}) => {
      const { name, image, price, recipe } = item;
      return (
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={image} alt={image} />
          </figure>
          <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 flex flex-col items-center">
            ${price}
          </p>
          <div className="card-body text-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
              <button
                className={`btn btn-sm px-6 border-0 border-b-4 border-orange-400 bg-slate-100 text-yellow-700 hover:text-white hover:bg-yellow-600 `}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      );
};

export default FoodCard;