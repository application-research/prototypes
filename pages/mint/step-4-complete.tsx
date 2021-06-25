import styles from "@pages/Index.module.scss";

import * as React from "react";
import * as Requests from "@common/requests";
import * as Utilities from "@common/utilities";

import App from "@components/App";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import Input from "@components/Input";
import Textarea from "@components/Textarea";

function MintFour(props) {
  return (
    <App>
      <Navigation isAuthenticated amount="100.2 FIL" wallet="bafy123...">
        <div className={styles.two__column}>
          <div className={styles.two__column__sidebar}>
            <div className={styles.box__section}>
              <img
                className={styles.image}
                style={{ borderRadius: `8px 8px 0px 0px` }}
                src="/data-google.png"
              />

              <h2
                className={styles.h2}
                style={{ padding: `16px 20px 8px 20px` }}
              >
                Google Brain Data
              </h2>

              <div className={styles.info}>
                <div className={styles.box__author__left}>
                  <img
                    className={styles.box__author__left__image}
                    src="/avatar-google.png"
                  />
                </div>
                <div className={styles.box__author__right}>@google</div>
              </div>
            </div>
          </div>
          <div className={styles.two__column__content}>
            <h1 className={styles.h1} style={{ paddingTop: 64 }}>
              Your Data NFT has been minted!
            </h1>

            <p className={styles.paragraph}>
              Congratulations! Your artwork has been offically been minted as an
              NFT on the Filecoin Network. With this NFT, storage providers will
              be able to bid for it and store it on the Filecoin Network.
            </p>

            <a
              className={styles.button}
              style={{ marginTop: 48 }}
              href="/mint/step-5-list"
            >
              List Data NFT
            </a>
          </div>
        </div>
      </Navigation>
      <Footer />
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default MintFour;
