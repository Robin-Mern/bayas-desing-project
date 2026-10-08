'use client';

import React, { useState, useRef, useEffect } from 'react';
import { CATEGORIES, SORT_OPTIONS } from './productsData';

export default function ProductFiltersBar({
  totalCount,
  selectedCategory,
  onSelectCategory,
  selectedSort,
  onSelectSort,
}) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const sortRef = useRef(null);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentSortLabel = SORT_OPTIONS.find((s) => s.id === selectedSort)?.label || 'A-Z';

  return (
    <div className="productFiltersBarWrapper">
      <div className="filtersBarMain">
        {/* Left: FILTERS Button */}
        <button
          type="button"
          className={`filterTriggerBtn ${isFilterPanelOpen ? 'active' : ''}`}
          onClick={() => setIsFilterPanelOpen((prev) => !prev)}
          aria-expanded={isFilterPanelOpen}
        >
          <svg
            className="filterSlidersIcon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
          <span>FILTERS</span>
        </button>

        {/* Center: Total Results Count */}
        <div className="resultsCountBadge">
          <span>{totalCount} RESULTS</span>
        </div>

        {/* Right: SORT Dropdown */}
        <div className="sortDropdownWrapper" ref={sortRef}>
          <button
            type="button"
            className={`sortTriggerBtn ${isSortOpen ? 'open' : ''}`}
            onClick={() => setIsSortOpen((prev) => !prev)}
            aria-expanded={isSortOpen}
          >
            <span>SORT: {currentSortLabel}</span>
            <svg
              className={`sortChevronIcon ${isSortOpen ? 'rotated' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Smooth Animated Dropdown Menu */}
          <div className={`sortDropdownMenu ${isSortOpen ? 'show' : ''}`}>
            <ul>
              {SORT_OPTIONS.map((option) => (
                <li key={option.id}>
                  <button
                    type="button"
                    className={`sortOptionBtn ${selectedSort === option.id ? 'active' : ''}`}
                    onClick={() => {
                      onSelectSort(option.id);
                      setIsSortOpen(false);
                    }}
                  >
                    <span>{option.label}</span>
                    {selectedSort === option.id && <span className="sortCheck">&#10003;</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Expandable Filter Panel */}
      <div className={`expandableFilterPanel ${isFilterPanelOpen ? 'expanded' : ''}`}>
        <div className="filterPanelInner">
          <div className="filterPillsRow">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`categoryPill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
