import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../Search";
// import Icon from "@mui/material/Icon";

// <Icon>star</Icon>;

function Home() {
  return (
    <div classname="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="store">Store</Link>
          {/* we are using here link tags and not a tag because if we use an a tag it's gonna actually go to that 
          page and refresh and we don't want that and link has no refresh  */}
        </div>

        <div className="home__headerRight">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          {/* <span class="material-icons">get_app</span> */}
          <AppsIcon />
          {/* <GetAppIcon /> */}
          <Avatar />
          {/* Avatar--> this gives a person inside a circle icon  */}
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        {/* <img src={require("../logo.png")} alt="" />  */}
        {/* my name image */}
        <div className="home__inputContainer"></div>
        <Search />
      </div>
    </div>
  );
}

export default Home;
