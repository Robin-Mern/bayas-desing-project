'use client';

import React from 'react';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const { title, price, originalPrice, image } = product;

  return (
    <article className="productCard">
      {/* Product Image Frame */}
      <div className="productImageWrapper">
        <Image
          src={image}
          alt={title}
          fill
          className="productImage"
          sizes="(max-width: 576px) 50vw, (max-width: 991px) 33vw, 25vw"
          quality={88}
        />
        <div className="productImageGlow" />
      </div>

      {/* Product Details (no classes on h3 or p) */}
      <div className="productDetails">
        <h3>{title}</h3>
        <div className="productPricing">
          <span className="priceCurrent">FROM RS {price}</span>
          {originalPrice && <span className="priceOriginal">RS {originalPrice}</span>}
        </div>
        <button
          type="button"
          className="addToCartAction"
          onClick={() => alert(`Added "${title}" to your cart!`)}
        >
          ADD TO CART
        </button>
      </div>
    </article>
  );
}
