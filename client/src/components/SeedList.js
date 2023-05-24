import SeedOffer from "./SeedOffer";
import React, {useState, useEffect} from "react";


function SeedList(props) {
  var offers = props.offers
  var seedRows = []
  for (var i = 0; i < offers.length; i++) {
    seedRows.push(
      <SeedOffer
        offer_details = {offers[i]}
      />
    );
  }

  return (
    <div className="container">
      {seedRows}
    </div>
  );
}

export default SeedList;
