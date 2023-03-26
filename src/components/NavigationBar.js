import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen((isOpen) => !isOpen);
    }
    
    const location = useLocation();

    return (
        <Navbar dark color="danger" container="lg" expand="sm" className="sticky-top shadow-lg p-3">
            <NavbarBrand className="logoBlock">
                <Link to="/" className="text-decoration-none text-light d-flex">
                    <img src="github-mark/github-mark-white.png" alt="logo" className="logo" />
                    <span className="logo-title">Github Finder</span>
                </Link>
            </NavbarBrand>
            <NavbarToggler onClick={handleToggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="ms-auto">
                    <NavItem className="ms-2">
                        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                            Home
                        </Link>
                    </NavItem>
                    <NavItem className="ms-2">
                        <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
                            About
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavigationBar;