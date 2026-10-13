import React from "react";
import Image from "next/image";

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
                                <li> <span><Image src="images/email-icon.svg" alt="Email Icon" /></span> Email us: <strong>thebayas@gmail.com</strong></li>
                                <li> <span><Image src="images/phone-icon.svg" alt="Phone Icon" /></span> Call us: <strong> 9947720265 <br/>9847597269 </strong></li>
                                <li> <span><Image src="images/address-icon.svg" alt="Address Icon" /></span> Our Address: <strong>The Bayas Puthukkadu PO, <br/> Chavara Kollam dist - 691585</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}