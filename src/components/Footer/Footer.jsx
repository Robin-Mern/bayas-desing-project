'use client';

import React from 'react';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footerSection" aria-label="Site Footer">
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className="footerGrid">
          {/* Column 1: Contact / Address & Phone */}
          <div className="footerCol footerContactCol">
            <div className="footerItem">
              <span>Address</span>
              <h3>
                The Bayas Puthukkadu<br />
                PO,Chavara Kollam dist
              </h3>
            </div>

            <div className="footerItem">
              <span>Phone</span>
              <h4>
                <a href="tel:+919847597269">(+91) 9847597269</a>
              </h4>
            </div>
          </div>

          {/* Column 2: Main Pages */}
          <div className="footerCol">
            <h5>Main Pages</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#projects">Project</Link></li>
              <li><Link href="/#gallery">Gallery</Link></li>
              <li><Link href="/#contact">Contact us</Link></li>
            </ul>
          </div>

          {/* Column 3: Others */}
          <div className="footerCol">
            <h5>Others</h5>
            <ul>
              <li><Link href="/service-detail">Architecture Design</Link></li>
              <li><Link href="/#construction">Construction</Link></li>
              <li><Link href="/#structural">Structural Design</Link></li>
              <li><Link href="/#interior">Interior Design</Link></li>
              <li><Link href="/#products">Interior Products</Link></li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="footerCol">
            <h5>Socials</h5>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="footerBottom">
          <p>© 2026 Copyright . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
