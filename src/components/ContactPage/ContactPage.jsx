import React from "react";
import Image from "next/image";
import "./Contactpage.css";

export default function ContactPage() {
    return (
        <section className="contact-wrapper">
            <div className="container">
                <div className="contact-row">

                    <div className="contact-col1">
                        <h2>Get in Touch with Us</h2>
                        <p>Contact Us for Personalized Assistance. We are happy to help you.</p>
                        <div className="contact-methods">
                            <ul>
                                <li> <span><Image src="/images/email-icon.svg" alt="Email Icon" width={26} height={26} /></span> Email us: <strong>thebayas@gmail.com</strong></li>
                                <li> <span><Image src="/images/call-icon.svg" alt="Phone Icon" width={26} height={26} /></span> Call us: <strong> 9947720265 <br />9847597269 </strong></li>
                                <li> <span><Image src="/images/location-icon.svg" alt="Address Icon" width={26} height={26} /></span> Our Address: <strong>The Bayas Puthukkadu PO, <br /> Chavara Kollam dist - 691585</strong></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-col2">
                        <div className="sidebar">
                            <div className="sidebar-row1">
                                <h3>Get in Touch</h3>
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="example@email.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" id="phone" className="form-control" placeholder="+1(45) 555-0132" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tell-us">Tell us about your project</label>
                                        <textarea id="tell-us" className="form-control" placeholder="Name"></textarea>
                                    </div>
                                    <input type="submit" value="Submit" className="submit-btn" />
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="contact-map">
                    <Image src="/images/location-map.jpg" alt="Contact Map" width={800} height={540} />
                </div>

            </div>
        </section>
    );
}