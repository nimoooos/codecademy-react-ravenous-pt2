import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
let request = {
  "businesses": [
    {
      "alias": "golden-boy-pizza-hamburg",
      "categories": [
        {
          "alias": "pizza",
          "title": "Pizza"
        },
        {
          "alias": "food",
          "title": "Food"
        }
      ],
      "coordinates": {
        "latitude": 41.7873382568359,
        "longitude": -123.051551818848
      },
      "display_phone": "(415) 982-9738",
      "distance": 4992.437696561071,
      "id": "QPOI0dYeAl3U8iPM_IYWnA",
      "image_url": "https://yelp-photos.yelpcorp.com/bphoto/b0mx7p6x9Z1ivb8yzaU3dg/o.jpg",
      "is_closed": true,
      "location": {
        "address1": "James",
        "address2": "Street",
        "address3": "68M",
        "city": "Los Angeles",
        "country": "US",
        "display_address": [
          "James",
          "Street",
          "68M",
          "Los Angeles, CA 22399"
        ],
        "state": "CA",
        "zip_code": "22399"
      },
      "name": "Golden Boy Pizza",
      "phone": "+14159829738",
      "price": "$",
      "rating": 4,
      "review_count": 903,
      "transactions": [
        "restaurant_reservation"
      ],
      "url": "https://www.yelp.com/biz/golden-boy-pizza-hamburg?adjust_creative=XsIsNkqpLmHqfJ51zfRn3A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XsIsNkqpLmHqfJ51zfRn3A",
      "business_hours": {
        "open": [
          {
            "is_overnight": false,
            "start": 15,
            "end": 130,
            "day": 0
          },
          {
            "is_overnight": false,
            "start": 630,
            "end": 1730,
            "day": 1
          },
          {
            "is_overnight": false,
            "start": 45,
            "end": 500,
            "day": 2
          }
        ],
        "hours_type": "REGULAR",
        "is_open_now": false
      }
    }
  ],
  "region": {
    "center": {
      "latitude": 37.76089938976322,
      "longitude": -122.43644714355469
    }
  },
  "total": 6800
};
let businesses=request.businesses;

console.log("Loading App...")
console.log(businesses);

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
};
