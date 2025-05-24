import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <p className="text-center text-xl my-12">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 my-24">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center col-span-full shadow-sm text-3xl p-4">
          Sorry, the products not found.
        </p>
      )}
    </div>
  );
};

export default ProductGrid;
