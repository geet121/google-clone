import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function 

Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue(); // after-->reducer.js

  const [input, setInput] = useState(""); //to keep track of the input text we use state
  // const history = useHistory();  In rrdom v6 usehistory is replaced by useNavigate

  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log("You hit the search button >> ", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      //type: 'SET_SEARCH_TERM',  string can also be used but we using object so that they match perfectly
      //from reducer.js  and we don't want to make any string mistakes
      term: input,
    });

    //do something with input...
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {/* if we don't pass the option to hide the buttons then render this */}
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonHiddens"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonHiddens" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;

//  --> StateProvider.js
