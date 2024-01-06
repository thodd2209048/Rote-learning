import clsx from "clsx";

import styles from "./DefaultLayout.module.scss";
import NavBar from "./NavBar/NavBar";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <header className={clsx("container ")}>
        <NavBar />
      </header>
      <main className={clsx(styles.content)}>{children}</main>
    </div>
  );
}

export default DefaultLayout;
