import * as React from "react";
import * as Requests from "@common/requests";
import * as Utilities from "@common/utilities";

import App from "@components/App";

function Index(props) {
  return (
    <App>
      Prototypes are hosted on this website, you need to know the specific URL
      to see them.
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Index;
