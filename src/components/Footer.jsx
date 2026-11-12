import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark" aria-hidden="true">n.</span>
            <span>Nexa<span className="brand-light">Studio</span></span>
          </Link>
          <p>Thoughtful digital, made real.</p>
        </div>
        <div className="footer-note">
          <span className="eyebrow">HAVE A GOOD ONE IN MIND?</span>
          <Link to="/contact">Tell us about it <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Nexa Studio</span>
        <span>Made with curiosity and care.</span>
      </div>
    </footer>
  );
}
