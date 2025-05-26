import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFavorite } from "../features/favourite/favoritesSlice";
import { X } from "lucide-react";

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites.items);

  const handleRemove = (product) => {
    dispatch(toggleFavorite(product));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Products</h1>
      {favoriteProducts.length === 0 ? (
        <p>You have no favorite products yet.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteProducts.map((product) => (
            <li key={product.id} className="border p-4 rounded relative">
              <button
                onClick={() => handleRemove(product)}
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:text-red-500"
              >
                <X size={20} />
              </button>
              <Link to={`/product/${product.id}`}>
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-32 object-cover my-2"
                />
                <p className="text-gray-600">${product.price}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
