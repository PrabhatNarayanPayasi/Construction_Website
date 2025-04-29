import Link from 'next/link';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press Releases</Link></li>
            <li><Link href="#">Amazon Science</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect with Us</h4>
          <ul>
            <li><Link href="#">Facebook</Link></li>
            <li><Link href="#">Twitter</Link></li>
            <li><Link href="#">Instagram</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li><Link href="#">Sell on Amazon</Link></li>
            <li><Link href="#">Become an Affiliate</Link></li>
            <li><Link href="#">Advertise Your Products</Link></li>
            <li><Link href="#">Amazon Pay on Merchants</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li><Link href="#">COVID-19 and Amazon</Link></li>
            <li><Link href="#">Your Account</Link></li>
            <li><Link href="#">Returns Centre</Link></li>
            <li><Link href="#">Help</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}
