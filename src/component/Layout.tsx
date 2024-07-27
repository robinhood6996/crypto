import {Outlet} from "react-router-dom";
import {IoHome} from "react-icons/io5";
import {IoMdCart} from "react-icons/io";
import {FaCircleUser, FaShop} from "react-icons/fa6";
import {FaWallet} from "react-icons/fa";

function Layout() {
    return (
        <>
        <header className="header" id="header">
            <nav className="navbar container">
                <a href="./index.html" className="brand">Name</a>
                <div className="menu" id="menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#" className="menu-link is-active">
                                <IoHome className="menu-icon"/>
                                <span className="menu-name">Home</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <IoMdCart className="menu-icon" />
                                <span className="menu-name">Order</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <FaShop className="menu-icon" />
                                <span className="menu-name">Market</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <FaWallet className="menu-icon" />
                                <span className="menu-name">Asset</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <FaCircleUser className="menu-icon" />
                                <span className="menu-name">Account</span>
                            </a>
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