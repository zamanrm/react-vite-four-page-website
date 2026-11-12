import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <NavLink className="brand" to="/" aria-label="Nexa Studio home">
          <span className="brand-mark" aria-hidden="true">n.</span>
          <span>Nexa<span className="brand-light">Studio</span></span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink className="header-cta" to="/contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </NavLink>
      </div>
    </header>
  );
}
