import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

export default function BusinessList () {
  return (
    <div className={styles.BusinessList}>
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  );
};
