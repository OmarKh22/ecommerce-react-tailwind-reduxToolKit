import React from "react";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/products/productSlice";

const categories = [
  "All",
  "Electronics",
  "Footwear",
  "Accessories",
  "Appliances",
  "Fitness",
];

const Home = () => {

  const dispatch = useDispatch()

  return (
    <div>
      {/* <div className="bg"></div> */}
      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="bg-gray-300 py-2 px-3 rounded-md text-black active:scale-100 hover:bg-zinc-400 transition-all ease-in"
            onClick={()=>dispatch(setSelectedCategory(category))}
            >
              {category}
            </button>
          ))}
        </div>

        <ProductGrid />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
