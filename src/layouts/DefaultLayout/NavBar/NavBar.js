import clsx from "clsx";
import { Link, NavLink, useNavigate } from "react-router-dom";

import styles from "./NavBar.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";

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
          <nav class="navbar navbar-expand-lg navbar-light bg-light px-2">
            <Link to={"/"} className={clsx(styles.logo, "navbar-brand ")}>
              <p className="m-0 text-primary fs-4">ROTE LEARNING</p>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mr-auto ">
                <li class="nav-item">
                  <NavLink to={"/"} className={clsx(navLinkStyles, "nav-link")}>
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to={"/addArticle"}
                    className={clsx(navLinkStyles, "nav-link")}
                  >
                    Add article
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to={"/repetition"}
                    className={clsx(navLinkStyles, "nav-link")}
                  >
                    Repetition
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to={"/random"}
                    className={clsx(navLinkStyles, "nav-link")}
                  >
                    Random
                  </NavLink>
                </li>
              </ul>
              <Button
                className={clsx(styles.topBarBtn)}
                callToAction
                leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                onClick={() => navigate(`/filter`)}
              >
                Search
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
