import styles from "@pages/Index.module.scss";

import * as React from "react";
import * as Requests from "@common/requests";
import * as Utilities from "@common/utilities";

import App from "@components/App";
import FoundationLogo from "@components/FoundationLogo";
import Filecoin from "@components/Filecoin";
import IconBox from "@components/IconBox";
import IconSearch from "@components/IconSearch";

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
    username: RECIPIENT.username,
    src: RECIPIENT.src,
    amount: RECIPIENT.amount,
    usd: RECIPIENT.usd,
    date: "July 19th, 2021 at 12:23 AM",
    message: (
      <React.Fragment>
        Auction settled by <strong>@sundar</strong>
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
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api");
      const json = await response.json();
      console.log(json);
    }

    fetchData();
  }, []);

  return (
    <App>
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

        <div className={styles.hero}>
          <div className={styles.card}>
            <img className={styles.card__image} src="/data-google.png" />
            <div className={styles.card__description}>
              1.42 petabytes — 4,300,123 files
            </div>
          </div>
        </div>
      </div>

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
            <br />
            <br />

            <div className={styles.box__label} style={{ marginBottom: 8 }}>
              Preservation Rights
            </div>
            <div className={styles.h1}>1</div>

            <br />
            <br />

            <div className={styles.box__label} style={{ marginBottom: 8 }}>
              Requirements
            </div>
            <div className={styles.h1}>
              USA, Europe, Japan, and Public Domain
            </div>

            <br />
            <br />

            <div className={styles.box__label} style={{ marginBottom: 8 }}>
              Duration
            </div>
            <div className={styles.h1}>40 Years</div>

            <br />
            <br />
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
          </div>
          <div className={styles.body__content__right}>
            <div className={styles.box}>
              <div className={styles.box__left}>
                <div className={styles.box__label}>Sold for</div>
                <div className={styles.box__emphasis} style={{ marginTop: 8 }}>
                  {RECIPIENT.amount}
                </div>
                <div className={styles.box__sublabel} style={{ marginTop: 2 }}>
                  {RECIPIENT.usd}
                </div>
              </div>
              <div className={styles.box__right}>
                <div className={styles.box__creator}>
                  <div className={styles.box__label}>Preserved by</div>
                  <div className={styles.box__author}>
                    <div className={styles.box__author__left}>
                      <img
                        className={styles.box__author__left__image}
                        src={RECIPIENT.src}
                      />
                    </div>
                    <div className={styles.box__author__right}>
                      {RECIPIENT.username}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className={styles.h2} style={{ marginBottom: 24 }}>
              Activity
            </h2>

            {ACTIVITY.map((each, index) => (
              <div className={styles.box} key={`each-${index}`}>
                <div className={styles.box__left}>
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
                      style={{ fontWeight: 500 }}
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
                      style={{ fontWeight: 500, color: `var(--color-border` }}
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
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Google;
