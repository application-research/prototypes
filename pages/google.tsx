import styles from "@pages/Index.module.scss";

import * as React from "react";
import * as Requests from "@common/requests";
import * as Utilities from "@common/utilities";

import App from "@components/App";
import FoundationLogo from "@components/FoundationLogo";
import Filecoin from "@components/Filecoin";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import IconBox from "@components/IconBox";
import Compliance from "@components/Compliance";
import Checkmark from "@components/Checkmark";

const CREATOR = {
  username: "@google",
  name: "Google AI",
  description: `At Google, we think that AI can meaningfully improve people's lives
            and that the biggest impact will come when everyone can access it.`,
  src: "/avatar-google.png",
};

const RECIPIENT = {
  username: "@sundar",
  amount: "42 FIL",
  usd: "$4252.13 USD",
  src: "/avatar-sundar.jpg",
};

const ACTIVITY = [
  {
    username: "@jbenet",
    src: "/avatar-juan.png",
    amount: "77 FIL",
    usd: "$7700.00 USD",
    date: "July 19th, 2021 at 12:23 AM",
    settled: true,
    message: (
      <React.Fragment>
        Auction won by <strong>@jbenet</strong> (f13370)
      </React.Fragment>
    ),
  },
  {
    username: "@zuck",
    src: "/avatar-zuck.jpg",
    amount: "64 FIL",
    usd: "$6400.00 USD",
    date: "July 19th, 2021 at 12:23 AM",
    settled: true,
    message: (
      <React.Fragment>
        Auction won by <strong>@zuck</strong> (f12218)
      </React.Fragment>
    ),
  },
  {
    username: "@satya",
    src: "/avatar-satya.jpg",
    amount: "63 FIL",
    usd: "$6300.00 USD",
    date: "July 19th, 2021 at 12:23 AM",
    settled: true,
    message: (
      <React.Fragment>
        Auction won by <strong>@satya</strong> (f12221)
      </React.Fragment>
    ),
  },
  {
    username: RECIPIENT.username,
    src: RECIPIENT.src,
    amount: RECIPIENT.amount,
    usd: RECIPIENT.usd,
    date: "July 19th, 2021 at 12:23 AM",
    settled: true,
    message: (
      <React.Fragment>
        Auction won by <strong>@sundar</strong> (f01239)
      </React.Fragment>
    ),
  },
  {
    username: "@jbenet",
    src: "/avatar-juan.png",
    amount: "77 FIL",
    usd: "$7700.00 USD",
    date: "July 18st, 2021 at 5:00 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@jbenet</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@zuck",
    src: "/avatar-zuck.jpg",
    amount: "64 FIL",
    usd: "$6400.00 USD",
    date: "July 18st, 2021 at 4:40 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@zuck</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@satya",
    src: "/avatar-satya.jpg",
    amount: "63 FIL",
    usd: "$6300.00 USD",
    date: "July 18st, 2021 at 4:20 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@satya</strong>
      </React.Fragment>
    ),
  },
  {
    username: RECIPIENT.username,
    src: RECIPIENT.src,
    amount: RECIPIENT.amount,
    usd: RECIPIENT.usd,
    date: "July 18st, 2021 at 4:00 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@sundar</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@jbenet",
    src: "/avatar-juan.png",
    amount: "33 FIL",
    usd: "$3300.00 USD",
    date: "July 18st, 2021 at 3:00 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@jbenet</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@colin",
    src: "/avatar-colin.jpg",
    amount: "31 FIL",
    usd: "$3100.00 USD",
    date: "July 18st, 2021 at 2:46 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@colin</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@google",
    src: "/avatar-google.png",
    amount: "20 FIL",
    usd: "$2000.00 USD",
    date: "July 17th, 2021 at 2:40 PM",
    message: (
      <React.Fragment>
        Listed by <strong>@google</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@google",
    src: "/avatar-google.png",
    amount: "20 FIL",
    usd: "$2000.00 USD",
    date: "July 17th, 2021 at 2:00 PM",
    message: (
      <React.Fragment>
        Minted by <strong>@google</strong>
      </React.Fragment>
    ),
  },
];

function Google(props) {
  return (
    <App>
      <Navigation>
        <div className={styles.hero}>
          <div className={styles.card}>
            <img className={styles.card__image} src="/data-google.png" />
            <div className={styles.card__description}>
              1.42 petabytes — 4,300,123 files
            </div>
          </div>
        </div>
      </Navigation>

      <div className={styles.body}>
        <div className={styles.body__tools}>
          <div className={styles.body__tools__left}>
            <div className={styles.body__tools__left__author}>
              <div className={styles.box__author}>
                <div className={styles.box__author__left}>
                  <img
                    className={styles.box__author__left__image}
                    src={CREATOR.src}
                  />
                </div>
                <div className={styles.box__author__right}>
                  {CREATOR.username}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.body__tools__right}>&nbsp;</div>
        </div>

        <div className={styles.body__content}>
          <div className={styles.body__content__left}>
            <h1 className={styles.h1}>
              Petascale Reconstruction of the Human Cortex
            </h1>
            <aside className={styles.aside}>
              Ready to be preserved on the Filecoin Network
            </aside>

            <p className={styles.paragraph}>
              In January 2020 we released the fly “hemibrain” connectome — an
              online database providing the morphological structure and synaptic
              connectivity of roughly half of the brain of a fruit fly
              (Drosophila melanogaster). This database and its supporting
              visualization has reframed the way that neural circuits are
              studied and understood in the fly brain. While the fruit fly brain
              is small enough to attain a relatively complete map using modern
              mapping techniques, the insights gained are, at best, only
              partially informative to understanding the most interesting object
              in neuroscience — the human brain.
            </p>

            <p className={styles.paragraph}>
              Today, in collaboration with the Lichtman Laboratory at Harvard
              University, we are releasing the “H01” dataset, a 1.4 petabyte
              rendering of a small sample of human brain tissue, along with a
              companion paper, “A connectomic study of a petascale fragment of
              human cerebral cortex.” The H01 sample was imaged at
              4nm-resolution by serial section electron microscopy,
              reconstructed and annotated by automated computational techniques,
              and analyzed for preliminary insights into the structure of the
              human cortex. The dataset comprises imaging data that covers
              roughly one cubic millimeter of brain tissue, and includes tens of
              thousands of reconstructed neurons, millions of neuron fragments,
              130 million annotated synapses, 104 proofread cells, and many
              additional subcellular annotations and structures — all easily
              accessible with the Neuroglancer browser interface.
            </p>

            <p className={styles.paragraph}>
              Posted by Tim Blakely, Software Engineer and Michał Januszewski,
              Research Scientist, Connectomics at Google
            </p>

            <br />
            <br />

            <div
              className={styles.box}
              style={{ minWidth: "none", maxWidth: "288px" }}
            >
              <div className={styles.box__row}>
                <div
                  className={styles.box__row__left}
                  style={{ fontWeight: 500 }}
                >
                  <Filecoin
                    height="20px"
                    style={{ marginBottom: -4, marginRight: 16 }}
                  />
                  View on the Filecoin Network
                </div>
              </div>
            </div>

            <div
              className={styles.box}
              style={{ minWidth: "none", maxWidth: "288px" }}
            >
              <div className={styles.box__row}>
                <div
                  className={styles.box__row__left}
                  style={{ fontWeight: 500 }}
                >
                  <IconBox
                    height="20px"
                    style={{ marginBottom: -4, marginRight: 16 }}
                  />{" "}
                  View IPFS Metadata
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className={styles.box__label} style={{ marginBottom: 8 }}>
              Total provider editions
            </div>
            <div className={styles.h1}>4</div>

            <div className={styles.aside}>
              This means that only 4 data storage providers can win this bid.
            </div>

            <br />
            <br />
            <Compliance accepted>
              Countries: USA, Germany, Norway, China
            </Compliance>
            <Compliance accepted>Continents: North America, Asia</Compliance>
            <Compliance accepted>Duration: 40 Years</Compliance>
            <Compliance accepted>
              License: Apache License, Version 2.0
            </Compliance>
            <Compliance accepted>Total Tax Compliance</Compliance>
            <Compliance accepted>
              Children's Internet Protection Act (CIPA)
            </Compliance>
            <Compliance accepted>SOC II Type 2</Compliance>
            <Compliance accepted>0 faults in the last 30 Days</Compliance>
            <Compliance accepted>0 slashes in the last 30 Days</Compliance>
            <Compliance accepted>100% storage success rate</Compliance>
            <Compliance accepted>Trading with the Enemy Act (TWEA)</Compliance>
            <Compliance accepted>
              Cybersecurity Information Sharing Act (CISA)
            </Compliance>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className={styles.body__content__right}>
            <h2
              className={styles.h2}
              style={{ marginBottom: 24, marginTop: 8 }}
            >
              Activity
            </h2>

            {ACTIVITY.map((each, index) => (
              <div className={styles.box} key={`each-${index}`}>
                <div className={styles.box__left}>
                  {each.settled ? (
                    <Checkmark
                      height="16px"
                      style={{
                        color: "green",
                        position: "absolute",
                        background: "#fff",
                        padding: 4,
                        borderRadius: "100%",
                        bottom: -6,
                        right: -6,
                      }}
                    />
                  ) : null}
                  <img
                    src={each.src}
                    style={{ marginTop: 4 }}
                    className={styles.box__author__left__image}
                  />
                </div>
                <div className={styles.box__right} style={{ paddingLeft: 24 }}>
                  <div className={styles.box__row}>
                    <div
                      className={styles.box__row__left}
                      style={{
                        fontWeight: 500,
                        color: each.settled ? "green" : null,
                      }}
                    >
                      {each.message}
                    </div>
                    <div
                      className={styles.box__row__right}
                      style={{ fontWeight: 500 }}
                    >
                      {each.amount}
                    </div>
                  </div>
                  <div className={styles.box__row}>
                    <div className={styles.box__row__left}>{each.date}</div>
                    <div
                      className={styles.box__row__right}
                      style={{ fontWeight: 500, color: `var(--color-border)` }}
                    >
                      {each.usd}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.creator}>
        <h2 className={styles.creator__heading}>Creator</h2>

        <div className={styles.creator__meta}>
          <div className={styles.creator__meta__left}>
            <div className={styles.creator__meta__left__avatar}>
              <img
                className={styles.creator__meta__left__avatar__image}
                src={CREATOR.src}
              />
            </div>

            <div className={styles.creator__meta__left__body}>
              <h3 className={styles.creator__meta__name}>{CREATOR.name}</h3>
              <div className={styles.creator__meta__tagname}>
                {CREATOR.username}
              </div>
            </div>
          </div>

          <div className={styles.creator__meta__right}>
            {CREATOR.description}
          </div>
        </div>
      </div>

      <Footer />
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Google;
