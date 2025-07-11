import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
  const { name, image, price, recipe,_id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch]= useCart()
  const handleAddToCart = () => {
    if (user && user.email) {
      //send cart item to the database
      // console.log(user.email, food);
      const cartItem = {
        menuId:_id,
        email:user.email,
        name,
        image,
        price
      }
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items
          refetch();
        }
      });

    } else {
      Swal.fire({
        title: "You are not Logged In?",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login page
          navigate("/login", {state: {from: location}});
        }
      });
    }
  };
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
            onClick={ handleAddToCart}
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
