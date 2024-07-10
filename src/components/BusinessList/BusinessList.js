import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

export default function BusinessList(props) {
  const businesses = props.businesses;
  console.log("Loading BusinessList...")
  console.log(businesses);

  return (
    <div className={styles.BusinessList}>
      {
        businesses.map((x) => {
          console.log(x);
          return (<Business business={x}/>)
        })
      }
    </div>
  );
};
