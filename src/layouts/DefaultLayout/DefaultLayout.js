import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "~/components/Button/Button";
import styles from "./DefaultLayout.module.scss";
import NavBar from "./NavBar/NavBar";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? clsx(styles.active) : "";
  };
  return (
    <div className={clsx(styles.wrapper)}>
      <header className={clsx("container ")}>
        <NavBar />
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
