import React from "react";
import Checkboxes from "./Checkboxes.js";
import Searchphoto from "./searchphoto.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    postion: "relative",
    backgroundImage: "url(" + { Searchphoto } + ")",
    marginTop: 0,
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
      <div className={Classes.text}>
        <Checkboxes />
      </div>
      <div>
        <img src={Searchphoto} className={Classes.img} />
      </div>
    </>
  );
};

export default Search;
