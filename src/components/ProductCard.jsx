import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favourite/favoritesSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFav = favorites.find((item) => item.id === product.id);

  const handleToggleFav = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite(product));
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer w-[300px] h-[500px] flex flex-col relative">

        <button
          onClick={handleToggleFav}
          className="absolute top-2 right-2 z-10 bg-white p-1 rounded-full shadow hover:text-red-500"
        >
          <Heart
            size={24}
            fill={isFav ? "red" : "white"}
            stroke={isFav ? "red" : "black"}
          />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-[300px] h-[300px] object-cover rounded-t-lg"
        />
        <div className="bg-gray-50 p-4 flex flex-col flex-1">
          <h2 className="text-lg font-semibold my-2">{product.title}</h2>
          <p className="text-sm text-gray-600 flex-1">{product.description}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-lg font-semibold">$ {product.price}</p>
            <p className="text-blue-600 hover:underline">View Details</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
