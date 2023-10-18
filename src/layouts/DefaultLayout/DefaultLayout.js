import React from "react";
import PropTypes from "prop-types";
import styles from "./DefaultLayout.module.scss";
import clsx from "clsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Menu from "./Menu/Menu";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMartiniGlass,
} from "@fortawesome/free-solid-svg-icons";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => {
    return isActive ? clsx(styles.active) : "";
  };
  return (
    <div className={clsx(styles.wrapper)}>
      <header className={clsx("container")}>
        <div className={clsx(styles.topBar, "row")}>
          <div className="col">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={"/"} className={clsx(styles.logo, "navbar-brand")}>
                ROTE LEARNING
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
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <NavLink
                      to={"/"}
                      className={clsx(navLinkStyles, "nav-link")}
                    >
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
      </header>
      <main className={clsx(styles.content, ["container"])}>
        <div className="row mt-3">
          <div className="col">{children}</div>
        </div>
      </main>
    </div>
  );
}

export default DefaultLayout;
