import React from "react";
import "./Searchpage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";

export default function SearchPage() {
  //Suppose we just pushed some value in the data and then lets check if value came through
  //So whenever we grab a value from the data layer it gives us the state and the dispatch
  const [{ term }, dispatch] = useStateValue();
  //{term} this means get me the search term which we put inside state

  const { data } = useGoogleSearch(term);
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

//-->keys.js
