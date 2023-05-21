import SeedOffer from "./SeedOffer";
import React, {useState, useEffect} from "react";


function SeedList(props) {
  // need to get list of offers

  return (
    <div className="container">
      {props.seedRows}
    </div>
  );
}

export default SeedList;
