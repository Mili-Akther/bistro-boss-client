import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
      const {name, category, recipe, price, _id} = useLoaderData();
        const { register, handleSubmit } = useForm();
        const axiosPublic = useAxiosPublic();
        const axiosSecure = useAxiosSecure();
         const onSubmit = async (data) => {
            console.log(data);
            // image upload to imgbb and then get an uri
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
              headers: {
                "content-type": "multipart/form-data",
              },
            });
            if (res.data.success) {
              // now send the menu item data to the server with the image url
              const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
              };
              //
              const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
              console.log(menuRes.data);
            
            console.log("with image url", res.data);
            if (menuRes.data.modifiedCount > 0) {
              // show success popup
            //   reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is updated to the menu`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }
        };
 
      return (
            <div>
                  <SectionTitle heading="Update an Item" subHeading="Refresh Info"></SectionTitle>
                   <div>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full my-6">
                              <label className="label">
                                <span className="label-text">Recipe Name*</span>
                              </label>
                              <input
                                type="text"
                                defaultValue={name}
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
                                  defaultValue={category}
                                  className="select w-full"
                                >
                                  <option disabled={true} value="default">
                                    Select a category
                                  </option>
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
                                  defaultValue={price}
                                  placeholder="Price"
                                  {...register("price", { required: true })}
                                  className="input input-bordered w-full"
                                />
                              </div>
                            </div>
                            {/* recipe details */}
                            <fieldset className="fieldset">
                              <legend className="fieldset-legend">Recipe Details</legend>
                              <textarea defaultValue={recipe}
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
                             Update Menu Item
                            </button>
                          </form>
                        </div>
            </div>
      );
};

export default UpdateItem;