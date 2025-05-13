import { ShoppingBasket } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

const ProductsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.product.items.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="text-blue-600  hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-2">
      <div>
        <Link to="/" className="mb-8 inline-block">
          Back To Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4 md:p-8">
          <div className="shadow-lg rounded-xl p-4 max-w-md mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-zinc-800">
              {product.title}
            </h1>
            <p className="text-base text-gray-600">{product.description}</p>

            <div>
              <span className="text-3xl font-bold text-green-600">
                ${product.price}
              </span>
            </div>

            <div>
              <span className="text-sm font-medium text-zinc-500">
                {product.category}
              </span>
            </div>

            <button
            onClick={()=>dispatch(addToCart(product))}
              className="w-full md:w-auto bg-zinc-800 text-white px-8 py-3 rounded-lg flex items-center justify-center
                         gap-2 hover:bg-zinc-700 transition duration-200"
            >
              <ShoppingBasket /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
