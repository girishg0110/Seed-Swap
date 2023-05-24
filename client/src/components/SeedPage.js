import React from 'react'
import Navbar from './Navbar'
import AddSeed from './AddSeed'
import SeedList from './SeedList'
import {useState, useEffect} from 'react'

function SeedPage() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/offers")
      .then((resp) => resp.json())
      .then((json) => {
        setOffers(json);
      });
  }, []);

  const addOffer = (newOffer) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOffer),
    };
    fetch("/offers", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // if successful update
        setOffers([newOffer, ...offers]);
      });
  };

  const matchOffer = (offer, matchInfo) => {
    // POST /match --> how to get the SeedList to recall fetch/update list of available offers
    // for now, we do nothing
  };

  return (
    <div>
      <Navbar />
      <AddSeed addOffer={addOffer} />
      <SeedList offers={offers} matchOffer={matchOffer} />
    </div>
  );
}

export default SeedPage