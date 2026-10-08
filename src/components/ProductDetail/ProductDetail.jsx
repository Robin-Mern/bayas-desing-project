'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiPackage, FiTruck, FiGlobe, FiCreditCard } from 'react-icons/fi';
import { HiPlus, HiMinus } from 'react-icons/hi';
import './ProductDetail.css';

const PRODUCT_IMAGES = [
  { id: 1, src: '/images/bull-wood-main.png', alt: 'Bull-wood Art Light - Front Ambient View' },
  { id: 2, src: '/images/bull-wood-thumb-1.png', alt: 'Bull-wood Art Light - Angle View' },
  { id: 3, src: '/images/bull-wood-thumb-2.png', alt: 'Bull-wood Art Light - Illumination Glow' },
  { id: 4, src: '/images/bull-wood-thumb-3.png', alt: 'Bull-wood Art Light - Craftsmanship Detail' },
];

const RELATED_PRODUCTS = [
  {
    id: 1,
    title: 'BULL-WOOD ART LIGHT',
    price: 1500,
    originalPrice: 2500,
    image: '/images/related-bull.png',
  },
  {
    id: 2,
    title: 'LION-WOOD WALL ART LIGHT',
    price: 1500,
    originalPrice: 2500,
    image: '/images/related-lion.png',
  },
  {
    id: 3,
    title: 'PARAMETRIC WOOD LIGHT',
    price: 1500,
    originalPrice: 2500,
    image: '/images/related-parametric.png',
  },
];

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(PRODUCT_IMAGES[0].src);
  const [quantity, setQuantity] = useState(1);
  const [openAccordions, setOpenAccordions] = useState({
    description: false,
    specifications: false,
  });
  const [toastMessage, setToastMessage] = useState('');

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleDecreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncreaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  return (
    <div className="productDetailPage">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="productToast" role="alert">
          {toastMessage}
        </div>
      )}

      {/* Main Product Showcase Section */}
      <section className="productHeroSection" aria-label="Product Details">
        <div className="container">
          <div className="productHeroGrid">
            {/* Left Column: Gallery */}
            <div className="productGalleryCol">
              <div className="productMainImageFrame">
                <Image
                  src={selectedImage}
                  alt="Bull-wood Art Light"
                  fill
                  priority
                  className="productMainImage"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>

              {/* Thumbnails Row */}
              <div className="productThumbsRow" role="tablist" aria-label="Product thumbnails">
                {PRODUCT_IMAGES.map((img, idx) => (
                  <button
                    key={img.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedImage === img.src}
                    aria-label={`View image ${idx + 1}`}
                    className={`thumbButton ${selectedImage === img.src ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img.src)}
                  >
                    <div className="thumbImgWrapper">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="thumbImg"
                        sizes="100px"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Product Information */}
            <div className="productInfoCol">
              <h1 className="productMainTitle">Bull-wood Art Light</h1>

              <div className="productPriceTag">
                <span className="currentPrice">Rs. 1049</span>
                <span className="originalPrice">Rs. 1200</span>
              </div>

              <p className="productShortDescription">
                Crafted with artistic precision, Bull-Wood Art Light combines the natural beauty of
                wood with warm, elegant illumination. Designed to add character and charm to any
                space, it’s perfect for living rooms, bedrooms, dining areas, cafes, boutiques, and
                thoughtfully styled interiors.
              </p>

              {/* Quantity & Buy Now Action Row */}
              <div className="productActionsRow">
                <div className="quantitySelector" aria-label="Quantity selector">
                  <button
                    type="button"
                    className="qtyBtn"
                    onClick={handleDecreaseQty}
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <span className="qtyNumber" aria-live="polite">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    className="qtyBtn"
                    onClick={handleIncreaseQty}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="buyNowBtn"
                  onClick={() => showToast(`Added ${quantity} Bull-wood Art Light to cart!`)}
                >
                  Buy Now
                </button>
              </div>

              {/* Collapsible Accordions */}
              <div className="productAccordionsWrapper">
                {/* Accordion 1: Description */}
                <div className="accordionItem">
                  <button
                    type="button"
                    className="accordionHeader"
                    onClick={() => toggleAccordion('description')}
                    aria-expanded={openAccordions.description}
                  >
                    <span className="accordionTitle">Description:</span>
                    <span className="accordionIcon" aria-hidden="true">
                      {openAccordions.description ? <HiMinus size={18} /> : <HiPlus size={18} />}
                    </span>
                  </button>
                  {openAccordions.description && (
                    <div className="accordionBody">
                      <p>
                        The Bull-Wood Art Light is an original handcrafted wooden statement piece.
                        Carefully engineered layered timber highlights the bold contours of a bull
                        silhouette while concealing gentle, ambient backlight. Every light is sealed
                        with an eco-friendly matte finish to preserve the timber’s natural grain,
                        ensuring warmth and timeless elegance for modern and rustic decors alike.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Specifications */}
                <div className="accordionItem">
                  <button
                    type="button"
                    className="accordionHeader"
                    onClick={() => toggleAccordion('specifications')}
                    aria-expanded={openAccordions.specifications}
                  >
                    <span className="accordionTitle">Specifications</span>
                    <span className="accordionIcon" aria-hidden="true">
                      {openAccordions.specifications ? <HiMinus size={18} /> : <HiPlus size={18} />}
                    </span>
                  </button>
                  {openAccordions.specifications && (
                    <div className="accordionBody">
                      <ul className="specsList">
                        <li>
                          <strong>Material:</strong> Premium Natural Hardwood & Engineered Timber
                        </li>
                        <li>
                          <strong>Light Source:</strong> Energy-Efficient Warm White LED (3000K)
                        </li>
                        <li>
                          <strong>Dimensions:</strong> 40 cm (W) × 35 cm (H) × 4.5 cm (D)
                        </li>
                        <li>
                          <strong>Power Supply:</strong> 12V DC Adapter (included)
                        </li>
                        <li>
                          <strong>Mounting:</strong> Concealed flush wall bracket included
                        </li>
                        <li>
                          <strong>Finish:</strong> Hand-rubbed organic protective wood oil
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Value Proposition / Perks Cards */}
          <div className="productPerksGrid">
            <div className="perkCard">
              <div className="perkIconWrapper">
                <FiPackage className="perkIcon" />
              </div>
              <h2 className="perkTitle">Easy Returns</h2>
              <p className="perkDesc">
                Hassle-free returns with a simple and flexible return policy.
              </p>
            </div>

            <div className="perkCard">
              <div className="perkIconWrapper">
                <FiTruck className="perkIcon" />
              </div>
              <h2 className="perkTitle">Fast Delivery</h2>
              <p className="perkDesc">
                Get your order delivered quickly and safely to your doorstep.
              </p>
            </div>

            <div className="perkCard">
              <div className="perkIconWrapper">
                <FiGlobe className="perkIcon" />
              </div>
              <h2 className="perkTitle">Free Shipping</h2>
              <p className="perkDesc">
                Enjoy free delivery on eligible orders across all regions.
              </p>
            </div>

            <div className="perkCard">
              <div className="perkIconWrapper">
                <FiCreditCard className="perkIcon" />
              </div>
              <h2 className="perkTitle">Secure Payments</h2>
              <p className="perkDesc">
                Enjoy safe and secure payment options for every purchase.
              </p>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="relatedProductsSection">
            <h2 className="relatedProductsTitle">Related Products</h2>

            <div className="relatedProductsGrid">
              {RELATED_PRODUCTS.map((prod) => (
                <article key={prod.id} className="relatedProductCard">
                  <div className="relatedImgFrame">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="relatedImg"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="relatedDetails">
                    <h3 className="relatedCardTitle">{prod.title}</h3>
                    <div className="relatedPricing">
                      <span className="relatedFromPrice">FROM RS {prod.price}</span>
                      <span className="relatedOrigPrice">RS {prod.originalPrice}</span>
                    </div>
                    <button
                      type="button"
                      className="relatedAddToCartBtn"
                      onClick={() => showToast(`Added "${prod.title}" to cart!`)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

