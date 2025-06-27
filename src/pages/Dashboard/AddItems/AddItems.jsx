import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AddItems = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
      console.log(data)};
      return (
        <div>
          <SectionTitle
            heading="add an item"
            subHeading="What's new"
          ></SectionTitle>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>           
              <input {...register("name")} />                       
              <select {...register('category')}
              defaultValue="Pick a color" className="select">
                <option disabled={true}>Select a categoty</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
              <input type="submit" />
            </form>
          </div>
        </div>
      );
};

export default AddItems;