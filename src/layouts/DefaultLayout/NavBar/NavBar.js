import clsx from "clsx";
import { Link, NavLink, useNavigate } from "react-router-dom";

import styles from "./NavBar.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { paths } from "~/routes/paths";

NavBar.propTypes = {
  className: PropTypes.string,
};

function NavBar({ className }) {
  const classes = clsx(className, styles.wrapper);
  const navigate = useNavigate();

  const navLinkStyles = ({ isActive }) => {
    return isActive ? clsx(styles.active) : "";
  };
  return (
    <div className={classes}>
      <div className={clsx(styles.topBar, "row")}>
        <div className="col">
          <Navbar expand="sm" className="bg-body-tertiary">
            <Link to={"/"} className={clsx(styles.logo, "navbar-brand ")}>
              <p className="m-0 text-primary fs-4">ROTE</p>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Article" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to={paths.articlePaths.repetition}
                  >
                    Repetition
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={paths.articlePaths.addArticle}
                  >
                    Add article
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={paths.articlePaths.articles}>
                    List articles
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={paths.adminPaths.admin}>
                  Admin
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
