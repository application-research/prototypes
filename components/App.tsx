import styles from "@components/App.module.scss";

import Head from "next/head";

import * as React from "react";

export default function App(props) {
  return (
    <React.Fragment>
      <Head>
        <title>PROTOTYPE</title>
        <meta name="title" content="PROTOTYPE" />
        <meta name="description" content="THIS IS A PROTOTYPE CONCEPT PAGE." />

        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>

      {props.children}
    </React.Fragment>
  );
}
