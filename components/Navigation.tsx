import styles from "@components/Navigation.module.scss";

import * as React from "react";

import FoundationLogo from "@components/FoundationLogo";
import IconSearch from "@components/IconSearch";

function Navigation(props) {
  if (props.isAuthenticated) {
    return (
      <div className={styles.top}>
        <nav className={styles.navigation}>
          <span className={styles.navigation__left}>
            <FoundationLogo height="32px" />
          </span>

          <span className={styles.navigation__middle}>&nbsp;</span>

          <span className={styles.navigation__right}>
            <a className={styles.nav__button} href="/mint">
              Create
            </a>

            <div className={styles.navigation__avatar}>
              <div className={styles.navigation__avatar__left}>
                <div className={styles.navigation__avatar__left__top}>
                  {props.amount}
                </div>
                <div className={styles.navigation__avatar__left__bottom}>
                  {props.wallet}
                </div>
              </div>
              <div className={styles.navigation__avatar__right}>
                <img
                  className={styles.navigation__avatar__image}
                  src="/avatar-sundar.jpg"
                />
              </div>
            </div>
          </span>
        </nav>

        {props.children}
      </div>
    );
  }

  return (
    <div className={styles.top}>
      <nav className={styles.navigation}>
        <span className={styles.navigation__left}>
          <FoundationLogo height="32px" />
        </span>

        <span className={styles.navigation__middle}>
          <div className={styles.nav__input__container}>
            <IconSearch
              height="20px"
              style={{ position: "absolute", top: 16, left: 16 }}
            />
            <input
              className={styles.nav__input}
              placeholder="Search Foundation..."
            />
          </div>
        </span>

        <span className={styles.navigation__right}>
          <button className={styles.nav__button}>Connect Wallet</button>
        </span>
      </nav>

      {props.children}
    </div>
  );
}

export default Navigation;
