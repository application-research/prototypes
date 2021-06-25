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

const CREATOR = {
  username: "@ibm",
  name: "IBM AI",
  description: `
IBM’s portfolio of business-ready tools, applications and solutions, designed to reduce the costs and hurdles of AI adoption while optimizing outcomes and responsible use of AI.`,
  src: "/avatar-ibm.png",
};

const RECIPIENT = {
  username: "@momack3",
  amount: "88 FIL",
  usd: "$8800.00 USD",
  src: "/avatar-momack.jpg",
};

const ACTIVITY = [
  {
    username: RECIPIENT.username,
    src: RECIPIENT.src,
    amount: RECIPIENT.amount,
    usd: RECIPIENT.usd,
    date: "December 8th, 2021 at 1:02 PM",
    message: (
      <React.Fragment>
        Auction settled by <strong>@momack3</strong>
      </React.Fragment>
    ),
  },
  {
    username: RECIPIENT.username,
    src: RECIPIENT.src,
    amount: RECIPIENT.amount,
    usd: RECIPIENT.usd,
    date: "December 8th, 2021 at 1:00 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@momack3</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@california",
    src: "/avatar-california.png",
    amount: "78 FIL",
    usd: "$7800.00 USD",
    date: "December 7th, 2021 at 8:14 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@california</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@colin",
    src: "/avatar-colin.jpg",
    amount: "76 FIL",
    usd: "$7600.00 USD",
    date: "December 7th, 2021 at 8:10 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@colin</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@california",
    src: "/avatar-california.png",
    amount: "70 FIL",
    usd: "$7000.00 USD",
    date: "December 7th, 2021 at 7:20 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@california</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@colin",
    src: "/avatar-colin.jpg",
    amount: "60 FIL",
    usd: "$6000.00 USD",
    date: "December 7th, 2021 at 4:28 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@colin</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@california",
    src: "/avatar-california.png",
    amount: "45 FIL",
    usd: "$4500.00 USD",
    date: "December 7th, 2021 at 1:00 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@california</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@colin",
    src: "/avatar-colin.jpg",
    amount: "42 FIL",
    usd: "$4200.00 USD",
    date: "December 7th, 2021 at 9:00 AM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@colin</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@california",
    src: "/avatar-california.png",
    amount: "32 FIL",
    usd: "$4200.00 USD",
    date: "December 7th, 2021 at 8:32 AM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@california</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@momack3",
    src: "/avatar-momack.jpg",
    amount: "30 FIL",
    usd: "$3000.00 USD",
    date: "December 7th, 2021 at 8:14 AM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@momack3</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@california",
    src: "/avatar-california.png",
    amount: "12 FIL",
    usd: "$1200.00 USD",
    date: "December 7th, 2021 at 6:52 AM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@california</strong>
      </React.Fragment>
    ),
  },
  {
    username: "@momack3",
    src: "/avatar-momack.jpg",
    amount: "11 FIL",
    usd: "$1100.00 USD",
    date: "December 6th, 2021 at 11:42 PM",
    message: (
      <React.Fragment>
        Bid placed by <strong>@momack3</strong>
      </React.Fragment>
    ),
  },
  {
    username: CREATOR.username,
    src: CREATOR.src,
    amount: "10 FIL",
    usd: "$1000.00 USD",
    date: "September 12th, 2021 at 8:40 PM",
    message: (
      <React.Fragment>
        Listed by <strong>{CREATOR.username}</strong>
      </React.Fragment>
    ),
  },
  {
    username: CREATOR.username,
    src: CREATOR.src,
    amount: "10 FIL",
    usd: "$1000.00 USD",
    date: "September 11th, 2021 at 7:00 PM",
    message: (
      <React.Fragment>
        Minted by <strong>{CREATOR.username}</strong>
      </React.Fragment>
    ),
  },
];

function IBM(props) {
  return (
    <App>
      <Navigation>
        <div className={styles.hero}>
          <div className={styles.card}>
            <img className={styles.card__image} src="/data-ibm.jpg" />
            <div className={styles.card__description}>
              482 Terabytes — 2,994,720
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
              Predicting Wildfires with Weather Forecast Data
            </h1>
            <aside className={styles.aside}>
              Ready to be preserved on the Filecoin Network
            </aside>

            <p className={styles.paragraph}>
              The wildfires, historical weather, historical weather forecast,
              vegetation index, and land classes datasets to predict wildfire
              for Australia in February 2021.
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
              USA, Apache License 2.0, Public Domain
            </div>

            <br />
            <br />

            <div className={styles.box__label} style={{ marginBottom: 8 }}>
              Duration
            </div>
            <div className={styles.h1}>15 Years</div>

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

      <Footer />
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default IBM;
