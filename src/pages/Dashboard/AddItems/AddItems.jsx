import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUtensils } from "react-icons/fa";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAxiosPublic from "../../../hooks/useAxiosPublic"
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const {register, handleSubmit} = useForm();
    const axiosPublic = useAxiosPublic()
    const onSubmit = async (data) => {
      console.log(data);
      // image upload to imgbb and then get an uri
      const imageFile = { image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api, imageFile,{
        headers : {
          'content-type': 'multipart/form-data'
        }
      });
      console.log(res.data)
    };

      return (
        <div>
          <SectionTitle
            heading="add an item"
            subHeading="What's new"
          ></SectionTitle>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Recipe Name*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Recipe Name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex gap-6 ">
                {/* category */}
                <div className="form-control w-full my-6">
                  <label className="label">
                    <span className="label-text ">Category*</span>
                  </label>
                  <select
                    {...register("category", { required: true })}
                    defaultValue="default"
                    className="select w-full"
                  >
                    <option disabled={true} value="default">Select a category</option>
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drink">Drink</option>
                  </select>
                </div>

                {/* price */}
                <div className="form-control w-full my-6">
                  <label className="label">
                    <span className="label-text">Price*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    {...register("price", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              {/* recipe details */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Recipe Details</legend>
                <textarea
                  {...register("recipe")}
                  className="textarea h-24"
                  placeholder="Recipe Details"
                ></textarea>
              </fieldset>

              <div className="form-control w-full my-6">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input file-input-ghost"
                />
              </div>

              <button className="btn">
                Add Item <FaUtensils />
              </button>
            </form>
          </div>
        </div>
      );
};

export default AddItems;