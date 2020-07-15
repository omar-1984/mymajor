import React from "react";
import Searchphoto from "./searchphoto.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "70%",
    height: "70%",
    marginTop: 0,
    postion: "relative",
    backgroundImage: "url(" + { Searchphoto } + ")",
    marginTop: 0,
    marginLeft: 400,
  },
  text: {
    textAlign: "center",
  },
}));
const Search = () => {
  const Classes = useStyles();

  return (
    <>
      <h1>Search Page</h1>
      <div className={Classes.text}></div>
      <div>
        <img src={Searchphoto} className={Classes.img} />
      </div>
    </>
  );
};

export default Search;
