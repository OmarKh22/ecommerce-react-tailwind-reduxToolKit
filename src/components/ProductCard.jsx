import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer w-[300px] h-[500px] flex flex-col">
        <img
          src={product.image}
          alt={product.title}
          className="w-[300px] h-[300px] object-cover rounded-t-lg"
        />
        <div className="bg-gray-50 p-4 flex flex-col flex-1">
          <h2 className="text-lg font-semibold my-2 ">{product.title}</h2>
          <p className="text-sm text-gray-600  flex-1">{product.description}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-lg font-semibold">$ {product.price}</p>
            <p className="text-blue-600 hover:underline">View Details</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard