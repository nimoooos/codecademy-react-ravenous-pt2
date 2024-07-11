import React from "react";
import styles from "./Business.module.css";
import rating00 from "./yelpassets/medium_20/Review_Ribbon_medium_20_0.png";
import rating05 from "./yelpassets/medium_20/Review_Ribbon_medium_20_half.png";
import rating15 from "./yelpassets/medium_20/Review_Ribbon_medium_20_2_1_half.png";
import rating20 from "./yelpassets/medium_20/Review_Ribbon_medium_20_2.png";
import rating25 from "./yelpassets/medium_20/Review_Ribbon_medium_20_2_half.png";
import rating30 from "./yelpassets/medium_20/Review_Ribbon_medium_20_3.png";
import rating35 from "./yelpassets/medium_20/Review_Ribbon_medium_20_3_half.png";
import rating40 from "./yelpassets/medium_20/Review_Ribbon_medium_20_4.png";
import rating45 from "./yelpassets/medium_20/Review_Ribbon_medium_20_4_half.png";
import rating50 from "./yelpassets/medium_20/Review_Ribbon_medium_20_5.png";


export default function Business(props) {

  function RatingStar() {
    let imgsrc
    if (business.rating < 0.25) {
      imgsrc = rating00
    } else if (business.rating < 0.75) {
      imgsrc = rating05
    } else if (business.rating < 1.75) {
      imgsrc = rating15
    } else if (business.rating < 2.25) {
      imgsrc = rating20
    } else if (business.rating < 2.75) {
      imgsrc = rating25
    } else if (business.rating < 3.25) {
      imgsrc = rating30
    } else if (business.rating < 3.75) {
      imgsrc = rating35
    } else if (business.rating < 4.25) {
      imgsrc = rating40
    } else if (business.rating < 4.75) {
      imgsrc = rating45
    } else {
      imgsrc = rating50
    }

    return (<img src={imgsrc} />)
  }

  const business = {
    imageSrc: props.business.image_url || "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: props.business.name || "Placeholder Name",
    address: [props.business.location.address1, props.business.location.address2, props.business.location.address3].join(' ') || "Placeholder Address",
    city: props.business.location.city || "Placeholderville",
    state: props.business.location.state || "ST",
    zipCode: props.business.location.zip_code || "00000",
    category: props.business.categories.map((x) => { return x.title }).join(', ') || "Placeholder",
    rating: props.business.rating || -1,
    reviewCount: props.business.review_count || -1,
  };
  console.log("Loading Business...");
  console.log(business);


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
          <RatingStar/>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};
