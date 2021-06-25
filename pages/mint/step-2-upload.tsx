import styles from "@pages/Index.module.scss";

import * as React from "react";
import * as Requests from "@common/requests";
import * as Utilities from "@common/utilities";

import App from "@components/App";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

function MintTwo(props) {
  return (
    <App>
      <Navigation isAuthenticated amount="100.2 FIL" wallet="bafy123...">
        <div className={styles.upload__container}>
          <div className={styles.upload}>
            <div className={styles.upload__top} />

            <div className={styles.upload__middle}>
              <h1 className={styles.h1}>Upload</h1>

              <p className={styles.paragraph}>
                CAR, or ZIP files accepted.
                <br />
                32 GB Limit, 100MB Minimum.
              </p>
            </div>

            <div className={styles.upload__bottom}>
              <p className={styles.paragraph}>
                Drag and drop, or
                <br />
                Click to browse.
              </p>
            </div>
          </div>

          <div className={styles.actions}>
            <a className={styles.button} href="/mint/step-3-make">
              Upload
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

export default MintTwo;
