import styles from "@components/Compliance.module.scss";

import * as React from "react";

import Checkmark from "@components/Checkmark";

function Compliance(props) {
  return (
    <div className={styles.compliance} style={props.style}>
      <div className={styles.compliance__left}>{props.children}</div>
      <div
        className={styles.compliance__right}
        style={props.accepted ? { color: "green" } : null}
      >
        {props.accepted ? (
          <Checkmark height="20px" />
        ) : (
          <input type="checkbox" />
        )}
      </div>
    </div>
  );
}

export default Compliance;
