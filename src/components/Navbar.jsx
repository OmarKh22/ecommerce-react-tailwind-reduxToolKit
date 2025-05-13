import { Store, User } from "lucide";
import { ShoppingBag, StoreIcon, User2 } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/products/productSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md ">
      <>
        <div className="shadow-md py-4">
          <ul className="relative container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center">
            <div className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </div>
            <div
              className={`${
                isOpen
                  ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4"
                  : "hidden"
              }`}
            >
              <li>
                <Link to="/">Sign</Link>
              </li>
              <li>
                <Link to="/">My Account</Link>
              </li>
            </div>
            <User2
              size={40}
              className="bg-gray-200 p-2 text-black rounded cursor-pointer"
              onClick={handleUser}
            />
          </ul>
        </div>

        <nav className=" flex justify-between items-center container mx-auto md:py-6 py-8 px-2">
          <div className="flex items-center">
            <Link to="/" className="bg-gray-200 py-2 px-4 rounded">
              <StoreIcon size={40} />
            </Link>
          </div>
          <form className="w-1/2 hidden md:block">
            <input
              type="text"
              placeholder="search products ..."
              className="bg-zinc-100 rounded-md border border-zinc-100 py-3 px-3 w-full focus:outline-none"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </form>
          <div className="relative">
            <Link to={"/cart"} className=" py-2 px-2 rounded">
              <ShoppingBag />
              {itemCount > 0 && (
                <span className=" text-sm absolute top-2 -right-1 bg-blue-500 text-white w-5 h-5 rounded-full items-center justify-center flex">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </>
    </header>
  );
};

export default Navbar;
