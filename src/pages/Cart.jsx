
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <Link to="/" className="text-blue-600  hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
              </Link>
              <div className="flex-1">
                <Link
                  to={`/product/${item.id}`}
                  className="font-semibold hover:text-blue-500"
                >
                  {item.title}
                </Link>
                <p className="text-gray-600">$ {item.price} </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Math.max(0, item.quantity - 1),
                        })
                      )
                    }
                    className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Math.max(0, item.quantity + 1),
                        })
                      )
                    }
                    className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                  <div onClick={()=>dispatch(removeFromCart(item.id))} className="ml-4 text-red-500 hover:text-red-700 cursor-pointer">
                    <Trash2 size={20} />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 font-bold flex justify-between">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-zinc-300 py-2 rounded-md font-bold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
