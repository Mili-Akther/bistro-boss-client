import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SaladImg from "../../../assets/home/slide1.jpg"
const SaladCard = () => {
  return (
    <section>
      <SectionTitle
        subHeading="Should Try"
        heading=" CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded shadow-md overflow-hidden flex flex-col items-center"
          >
            <img
              src={SaladImg}
              alt="Caeser Salad"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-1">Caeser Salad</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button
                className={`btn btn-sm px-6 border-0 bg-transparent text-yellow-700 hover:text-white hover:bg-yellow-600 transition-colors duration-300 ${
                  i === 1
                    ? "bg-gray-800 text-yellow-400"
                    : "border-b-[3px] border-yellow-600"
                }`}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaladCard;
