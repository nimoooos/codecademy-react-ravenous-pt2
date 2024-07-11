import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

export default function SearchBar () {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [sortingOption, setSortingOption] = useState("best_match")
  
  function renderSortByOptions () {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li onClick={sortingOptionUpdateHandler} className={sortByOptionValue==sortingOption?styles.active:null} key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  function searchQueryUpdateHandler(event) {
    setSearchQuery(event.target.value);
  }

  function locationQueryUpdateHandler(event) {
    setLocationQuery(event.target.value);
  }

  function sortingOptionUpdateHandler(event) {
    setSortingOption(sortByOptions[event.target.innerText])
  }

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder="Search Businesses" onChange={searchQueryUpdateHandler}/>
        <input placeholder="Where?" onChange={locationQueryUpdateHandler}/>
      </div>
      <div className={styles.SearchBarSubmit}>
        <a>Let's Go</a>
      </div>
    </div>
  );
};
