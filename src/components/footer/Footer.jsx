import React from 'react';
import './Footer.css';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section about">
                    <h3>About EduPlatform</h3>
                    <p>EduPlatform is your trusted partner in online learning. Our goal is to empower students with flexible, high-quality, and affordable education led by top educators.</p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section categories">
                    <h3>Top Categories</h3>
                    <ul>
                        <li><a href="/categories/ca">CA</a></li>
                        <li><a href="/categories/cs">CS</a></li>
                        <li><a href="/categories/gate">GATE</a></li>
                        <li><a href="/categories/jee">JEE</a></li>
                        <li><a href="/categories/neet">NEET</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><FaPhoneAlt /> +91 9876543210</p>
                    <p><FaEnvelope /> support@eduplatform.com</p>
                    <p><FaMapMarkerAlt /> Cuttack, Odisha, India</p>

                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} EduPlatform. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;