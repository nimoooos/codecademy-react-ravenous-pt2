import React from "react";
import styles from "./Business.module.css";

export default function Business(props) {
  const business = {
    imageSrc: props.business.image_url || "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: props.business.name || "Placeholder Name",
    address: [props.business.location.address1,props.business.location.address2,props.business.location.address3].join(' ') || "Placeholder Address",
    city: props.business.location.city || "Placeholderville",
    state: props.business.location.state || "ST",
    zipCode: props.business.location.zip_code || "00000",
    category: props.business.categories.map((x) => { return x.title }).join(', ') || "Placeholder",
    rating: props.business.rating||-1,
    reviewCount: props.business.review_count||-1,
  };
  console.log("Loading Business...");
  console.log(props);

  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc} alt="" />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{business.category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};
