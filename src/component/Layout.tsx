import { Link, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { FaCircleUser, FaShop } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
function Layout() {
  return (
    <>
      <header className="header" id="header">
        <nav className="navbar container">
          <Link to="/">
            <img src={Logo} alt="logo" height={60} width={80} />
          </Link>
          <div className="menu" id="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="#" className="menu-link is-active">
                  <IoHome className="menu-icon" />
                  <span className="menu-name">Home</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/orders" className="menu-link">
                  <IoMdCart className="menu-icon" />
                  <span className="menu-name">Order</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/market" className="menu-link">
                  <FaShop className="menu-icon" />
                  <span className="menu-name">Market</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/assets" className="menu-link">
                  <FaWallet className="menu-icon" />
                  <span className="menu-name">Asset</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/account" className="menu-link">
                  <FaCircleUser className="menu-icon" />
                  <span className="menu-name">Account</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="position-relative main-wrapper">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
