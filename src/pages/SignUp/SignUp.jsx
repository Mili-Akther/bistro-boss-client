import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';

const SignUP = () => {
      const {
        register,
        handleSubmit, 
        formState: { errors },
      } = useForm();
      const {createUser} = useContext(AuthContext)
      const onSubmit = (data) => {
            console.log(data);
            createUser(data.email, data.password)
            .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
            })
      };
     
      return (
        <>
          <Helmet>
                    <title>Bistro Boss | Sign Up</title>
                  </Helmet>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">sign Up now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      name="name"
                      className="input"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <span className="text-red-600">Name is required</span>
                    )}
                    <label className="label">Email</label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="text-red-600">email is required</span>
                    )}
                    <label className="label">Password</label>
                    <input
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                      type="password"
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password is must be 6 characters
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-red-600">
                        Password is must be less then 20 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password is must have one uppercase one lowercase , one
                        number and one special character
                      </p>
                    )}
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <input
                      className="btn btn-neutral mt-4"
                      type="submit"
                      value="Sign Up"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </>
      );
};

export default SignUP;