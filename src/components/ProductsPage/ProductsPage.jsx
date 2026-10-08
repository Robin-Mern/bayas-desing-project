'use client';

import React, { useState, useMemo } from 'react';
import ProductFiltersBar from './ProductFiltersBar';
import ProductCard from './ProductCard';
import { ALL_PRODUCTS } from './productsData';
import './ProductsPage.css';

export default function ProductsPage() {
  const [visibleCount, setVisibleCount] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('a-z');
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Filter & Sort Logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...ALL_PRODUCTS];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sort
    result.sort((a, b) => {
      switch (selectedSort) {
        case 'a-z':
          return a.title.localeCompare(b.title);
        case 'z-a':
          return b.title.localeCompare(a.title);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'featured':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return result;
  }, [selectedCategory, selectedSort]);

  // Sliced Visible Products
  const visibleProducts = useMemo(() => {
    return filteredAndSortedProducts.slice(0, visibleCount);
  }, [filteredAndSortedProducts, visibleCount]);

  const hasMore = visibleCount < filteredAndSortedProducts.length;

  // Smooth Show More Handler
  const handleShowMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 16);
      setIsLoadingMore(false);
    }, 280);
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setVisibleCount(16); // reset pagination on category filter change
  };

  const handleSelectSort = (sortId) => {
    setSelectedSort(sortId);
  };

  return (
    <section className="productsPageSection" aria-label="Our Exclusive Lighting Products">
      <div className="container">
        {/* Top Control Bar: Filters, Result Count & Sort */}
        <ProductFiltersBar
          totalCount={filteredAndSortedProducts.length}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          selectedSort={selectedSort}
          onSelectSort={handleSelectSort}
        />

        {/* 16-Grid Product Showcase */}
        <div className="productsGridWrapper">
          <div className="productsGrid">
            {visibleProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="productGridItem animatedItem"
                style={{ animationDelay: `${(index % 16) * 35}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Show More Button */}
        <div className="showMoreContainer">
          {hasMore ? (
            <button
              type="button"
              className={`showMoreBtn ${isLoadingMore ? 'loading' : ''}`}
              onClick={handleShowMore}
              disabled={isLoadingMore}
            >
              {isLoadingMore ? (
                <span className="showMoreLoader">Loading...</span>
              ) : (
                <span>Show More</span>
              )}
            </button>
          ) : (
            <p className="allLoadedNotice">All {filteredAndSortedProducts.length} products displayed</p>
          )}
        </div>
      </div>
    </section>
  );
}
