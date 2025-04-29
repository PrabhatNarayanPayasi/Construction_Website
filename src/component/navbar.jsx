"use client";
import Image from "next/image";
import logo from "../component/logo.jpg";
import Link from "next/link";
import "../component/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false); // Close overlay when a link is clicked
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link href="/" className="logo" onClick={handleClose}>
            <Image src={logo} alt="Logo" className="logo-img" width={60} height={60} />
          </Link>

          <div className="navLinks">
            <Link href="/" className="navLink">Home</Link>
            <Link href="/about" className="navLink">About</Link>
            <Link href="/services" className="navLink">Services</Link>
            <Link href="/contact" className="navLink">Contact</Link>
          </div>

          <button className="hamburger" onClick={() => setIsOpen(true)}>
            &#9776;
          </button>
        </div>
      </nav>

      <div className={`overlay ${isOpen ? "overlayActive" : ""}`}>
        <button className="closeBtn" onClick={() => setIsOpen(false)}>&times;</button>
        <div className="overlayLogoWrapper">
          <Image src={logo} alt="Logo" className="overlay-logo-img" width={80} height={80} />
        </div>
        <ul className="overlayMenu">
          <li><Link href="/" className="overlayLink" onClick={handleClose}>Home</Link></li>
          <li><Link href="/about" className="overlayLink" onClick={handleClose}>About</Link></li>
          <li><Link href="/services" className="overlayLink" onClick={handleClose}>Services</Link></li>
          <li><Link href="/contact" className="overlayLink" onClick={handleClose}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
