import React from "react";
import "./Searchpage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SearchPage() {
  //Suppose we just pushed some value in the data and then lets check if value came through
  //So whenever we grab a value from the data layer it gives us the state and the dispatch
  const [{ term }] = useStateValue();
  //{term} this means get me the search term which we put inside state

  //LIVE API CALL
  const { data } = useGoogleSearch(term);
  // const data = Response;
  // console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPage_logo" src={require("./logo.png")} alt="" />
        </Link>
        {/* we are using link tag and not a tag because if we use a  */}

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/setting">Setting</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="headerRight">
          <SettingsIcon />
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results
            {data?.searchInformation.formattedSearchTime} for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {/* this means if there is an image or length of image is longer than 0
                then go ahead and access the source and render the following (render an image) */}
                <img
                  className="searchPage__resultImage"
                  src={
                    item?.pagemap?.cse_image?.length > 0
                      ? item.pagemap?.cse_image?.[0]?.src
                      : ""
                  }
                  alt=""
                />
                {item.displayLink} ♦
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
      ;
    </div>
  );
}

// export default SearchPage;

//-->keys.js
