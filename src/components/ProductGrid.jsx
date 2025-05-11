import React from 'react'
// import products from '../../products'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const ProductGrid = () => {
    const products = useSelector((state) => state.product.filteredItems);
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
}

export default ProductGrid