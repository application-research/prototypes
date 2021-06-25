import styles from "@pages/Index.module.scss";

import * as React from "react";
import * as Requests from "@common/requests";
import * as Utilities from "@common/utilities";

import App from "@components/App";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import Input from "@components/Input";
import Textarea from "@components/Textarea";
import Compliance from "@components/Compliance";

function MintFive(props) {
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
              <h1 className={styles.h1}>Set a bidding price</h1>

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Filecoin price
              </h4>
              <Input placeholder="13 FIL" />

              <h3 className={styles.h3} style={{ opacity: 0.5, marginTop: 16 }}>
                $1300.00 USD
              </h3>

              <p className={styles.paragraph}>
                This price will be made public. Bidders will not be able to bid
                below this price. Once a bid has been placed, a 24 hour auction
                for this piece will begin.
              </p>

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Maximum auction winners
              </h4>
              <Input placeholder="4" />

              <p className={styles.paragraph} style={{ marginTop: 12 }}>
                The bidding will end once 24 hours have elapsed since the first
                bid, multiple bids will be accepted over the asking price.
              </p>

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Duration in years
              </h4>
              <Input placeholder="40" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Countries (optional)
              </h4>
              <Input placeholder="USA, Germany, China" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Continent (optional)
              </h4>
              <Input placeholder="North America" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                License
              </h4>
              <Input placeholder="MIT License" />

              <Compliance>Has miner index</Compliance>

              <h2 className={styles.h2} style={{ marginTop: 48 }}>
                Compliance
              </h2>
              <p className={styles.paragraph} style={{ marginTop: 8 }}>
                Require compliance from your bidders. Anyone bidding on this
                data must have proof of compliance.
              </p>

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Minimum network upload
              </h4>
              <Input placeholder="50mbs" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Minimum network download
              </h4>
              <Input placeholder="50mbs" />

              <Compliance>Climate protection</Compliance>
              <Compliance>Tsunami protection</Compliance>
              <Compliance>Flood protection</Compliance>
              <Compliance>Tornado resistant</Compliance>
              <Compliance>Tax compliance in host country</Compliance>
              <Compliance>Physical barriers</Compliance>
              <Compliance>High definition video surveillance</Compliance>
              <Compliance>Monitoring staff</Compliance>
              <Compliance>24/7/365 Support</Compliance>
              <Compliance>Cybersecurity controls</Compliance>

              <h2 className={styles.h2} style={{ marginTop: 48 }}>
                Certification
              </h2>
              <p className={styles.paragraph} style={{ marginTop: 8 }}>
                Require certification from your bidders. Anyone bidding on this
                data must have proof of certification
              </p>

              <Compliance>SSAE 18</Compliance>
              <Compliance>SOC 1 Report TYPE 2</Compliance>
              <Compliance>SOC 2 Report TYPE 2</Compliance>
              <Compliance>SOC 3 Report</Compliance>
              <Compliance>ISO 27001</Compliance>
              <Compliance>ISO 20000-1</Compliance>
              <Compliance>HIPAA</Compliance>
              <Compliance>PCI-DSS 3.2</Compliance>
              <Compliance>HIPAA</Compliance>
              <Compliance>PCI-DSS 3.2</Compliance>
              <Compliance>Computer Fraud and Abuse Act (CFAA)</Compliance>
              <Compliance>Communications Decency Act (CDA)</Compliance>
              <Compliance>Child Online Protection Act (COPA)</Compliance>
              <Compliance>Digital Millennium Copyright Act (DMCA)</Compliance>
              <Compliance>
                Children's Online Privacy Protection Act (COPPA)
              </Compliance>
              <Compliance>Children's Internet Protection Act (CIPA)</Compliance>
              <Compliance>Trading with the Enemy Act (TWEA)</Compliance>
              <Compliance>
                Cybersecurity Information Sharing Act (CISA)
              </Compliance>
              <Compliance>
                Stop Advertising Victims of Exploitation Act of 2015 (SAVE)
              </Compliance>
              <Compliance>Americans with Disabilities Act (ADA)</Compliance>
              <Compliance>
                Allow States and Victims to Fight Online Sex Trafficking Act -
                Stop Enabling Sex Traffickers Act (FOSTA-SESTA)
              </Compliance>

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Other certifications
              </h4>
              <Input placeholder="Add custom certification..." />

              <h2 className={styles.h2} style={{ marginTop: 48 }}>
                Technical requirements (optional)
              </h2>
              <p className={styles.paragraph} style={{ marginTop: 8 }}>
                Some technical requirements you can demand from storage
                providers bidding on your data. If you don't understand some of
                the terminology you are free to skip this section, we will use
                defaults for all empty fields.
              </p>

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Faults last 30 days
              </h4>
              <Input placeholder="0" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Slashes last 30 days
              </h4>
              <Input placeholder="0" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Availability last 30 days
              </h4>
              <Input placeholder="0" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Verified storage price
              </h4>
              <Input placeholder="0 FIL" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Verified retrieval price
              </h4>
              <Input placeholder="0 FIL" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Minimum index accuracy
              </h4>
              <Input placeholder="0" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Smallest successful deal GB
              </h4>
              <Input placeholder="1 GB" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Largest successful deal GB
              </h4>
              <Input placeholder="32 GB" />

              <h4 className={styles.label} style={{ marginTop: 24 }}>
                Reputation score
              </h4>
              <Input placeholder="100" />

              <div style={{ marginTop: 48 }}>
                <a
                  className={styles.button}
                  style={{ width: "100%" }}
                  href="/mint/step-6-complete"
                >
                  List your data
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

export default MintFive;
