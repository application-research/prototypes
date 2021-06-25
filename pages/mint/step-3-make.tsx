import styles from "@pages/Index.module.scss";

import * as React from "react";
import * as Requests from "@common/requests";
import * as Utilities from "@common/utilities";

import App from "@components/App";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import Input from "@components/Input";
import Textarea from "@components/Textarea";

function MintThree(props) {
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
            <div className={styles.box__section} style={{ padding: 24 }}>
              <h1 className={styles.h1}>Data information</h1>

              <p className={styles.paragraph}>
                Once your data is minted on the Filecoin blockchain, you will
                not be able to update any of its information. You will be
                responsible for sending an offline Filecoin storage deal to
                fulfill the storage providers bid.
              </p>

              <h4
                className={styles.label}
                style={{ marginTop: 24, marginBottom: 8 }}
              >
                Cover image
              </h4>
              <div className={styles.button}>Add cover image</div>

              <h4 className={styles.label} style={{ marginTop: 48 }}>
                Title
              </h4>
              <Input placeholder="Valuable dataset" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Filename
              </h4>
              <Input placeholder="example-file-52.zip" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Total size
              </h4>
              <Input placeholder="1.3 PiB" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Total files
              </h4>
              <Input placeholder="43201" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Description
              </h4>
              <Textarea
                placeholder="ex: This database and its supporting
              visualization has reframed the way that neural circuits are
              studied and understood in the fly brain."
              />

              <div style={{ marginTop: 48 }}>
                <a
                  className={styles.button}
                  style={{ width: "100%" }}
                  href="/mint/step-4-complete"
                >
                  Mint Data NFT
                </a>
              </div>
            </div>
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

export default MintThree;
