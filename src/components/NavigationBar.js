import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <Navbar dark color="danger" container="lg" expand="sm" className="sticky-top">
            <NavbarBrand className="logoBlock">
                <img src="github-mark/github-mark-white.png" alt="logo" className="logo" />
                <span className="logo-title">Github Finder</span>
            </NavbarBrand>
            <NavbarToggler onClick={handleToggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="ms-auto">
                    <NavItem className="ms-2">
                        <Link to="/" className="nav-link active">
                                Home
                        </Link>
                    </NavItem>
                    <NavItem className="ms-2">
                        <Link to="/about" className="nav-link active">
                                About
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavigationBar;