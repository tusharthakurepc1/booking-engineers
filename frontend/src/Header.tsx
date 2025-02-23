import "./Header.css";
import BE_LOGO from "./assets/be_logo.png"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={BE_LOGO} alt="Logo" width={30}/>{" "}
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="auth">
        <a href="#">Login</a>
        <a href="#" className="signup">
          Signup
        </a>
      </div>
    </header>
  );
};

export default Header;
