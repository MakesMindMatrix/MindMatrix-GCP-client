import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='footer_container_left'>
        <div className='footer_logo'></div>
        <div className='footer_address'>
          <h1 className='footer_address_font'>MindMatrix Labs CLi House #149,</h1>
          <h1 className='footer_address_font'>14th Main, 4th Block Koramangala,</h1>
          <h1 className='footer_address_font'>Bangalore - 560 034.</h1>
          <h1 className='footer_address_font'>+91 9611546444</h1>
          <h1 className='footer_address_font'>contact@mindmatrix.io</h1>
        </div>
        <div className='footer_social'>
          <Link
            to="https://www.linkedin.com/company/mindmatrixio/?originalSubdomain=in"
            target="_blank"
          >
            <FaLinkedin className="social_icon linkeDin" />
          </Link>

          <Link
            to="https://www.instagram.com/mindmatrixed/"
            target="_blank"
          >
            <FaInstagramSquare className="social_icon insta" />
          </Link>

          <Link
            to="https://www.youtube.com/@mindmatrixed2588"
            target="_blank"
          >
            <FaSquareYoutube className="social_icon youTube" />
          </Link>

          <Link
            to="https://twitter.com/mindmatrixed"
            target="_blank"
          >
            <FaSquareXTwitter className="social_icon twitter" />
          </Link>
        </div>
        <h1 className='footer_address_font'>© 2025 makes.mindmatrix.io</h1>
      </div>

      {/* Footer container right */}
      <div className='footer_container_right'>
        <div className='footer_links_parent'>
          <h1>GET TO KNOW US</h1>
          <Link to='/about-us'>About Us</Link>
        </div>

        <div className='footer_links_parent'>
          <h1>SUPPORT</h1>
          <Link to='/contact-us'>Contact Us</Link>
        </div>

        <div className='footer_links_parent'>
          <h1>CONSUMER POLICY</h1>
          <Link to='/terms-conditions'>Terms & Conditions</Link>
          <Link  to='/cancellations-return-policy'>Cancellations policy</Link>
          <Link to='/privacy-policy'>Privacy policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
