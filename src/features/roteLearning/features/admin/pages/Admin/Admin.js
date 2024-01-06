import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./Admin.module.scss";
import { quoteRoutes } from "../../../quotes/routes/routes";

Admin.propTypes = {
  className: PropTypes.string,
};

function Admin({ className }) {
  console.log(quoteRoutes);
  return (
    <div className={clsx(styles.wrapper, className, "container")}>
      <div className="border rounded p-2">
        <h5>Quote</h5>
        <div className={clsx(styles.routesContainer)}>
          {quoteRoutes.map((route) => (
            <Link key={route.path} to={route.path} className="me-2">
              {route.path}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
