import styles from "@pages/Index.module.scss";

import * as React from "react";
import * as Requests from "@common/requests";
import * as Utilities from "@common/utilities";

import { Image, Video, Cube } from "@components/Foundation";

import App from "@components/App";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

function MintOne(props) {
  return (
    <App>
      <Navigation isAuthenticated amount="42 ETH" wallet="xA412vr4...">
        <div className={styles.title}>
          <h1 className={styles.h1}>Create an NFT</h1>
        </div>

        <div className={styles.box__inline__row}>
          <div className={styles.box__card}>
            <Image />
            <h3 className={styles.h3} style={{ marginTop: 48 }}>
              Image
            </h3>
            <p className={styles.aside}>JPG or PNG</p>
          </div>
          <div className={styles.box__card}>
            <Video />
            <h3 className={styles.h3} style={{ marginTop: 48 }}>
              Video
            </h3>
            <p className={styles.aside}>MP4</p>
          </div>
          <a className={styles.box__card} href="/mint/step-3-make">
            <Cube />
            <h3 style={{ marginTop: 48 }} className={styles.h3}>
              Data (Filecoin)
            </h3>
            <p className={styles.aside}>CAR or ZIP</p>
          </a>
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

export default MintOne;
