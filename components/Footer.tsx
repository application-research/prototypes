import styles from "@components/Footer.module.scss";

import * as React from "react";

import FoundationLogo from "@components/FoundationLogo";

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>
        <FoundationLogo height="24px" />

        <span className={styles.footer__item}>Instagram</span>
        <span className={styles.footer__item}>Twitter</span>
        <span className={styles.footer__item}>Discord</span>
        <span className={styles.footer__item}>Blog</span>
      </div>
      <div className={styles.footer__right}>
        <span className={styles.footer__item}>About</span>
        <span className={styles.footer__item}>Community Guidelines</span>
        <span className={styles.footer__item}>Terms of Service</span>
        <span className={styles.footer__item}>Privacy</span>
        <span className={styles.footer__item}>Careers</span>
        <span className={styles.footer__item}>Help</span>
      </div>
    </footer>
  );
}

export default Footer;
