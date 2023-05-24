import React from 'react'

function SeedOffer(props) { 
  var offer = props.offer_details
  return (
    <div className="row" style={{ marginBottom: "30px" }}>
      <div className="col">
        <h3 style={{ marginLeft: "50px" }}>
          {offer.offered_seed} for {offer.desired_seed}
        </h3>
        <h5 style={{ marginLeft: "50px" }}>Proposer: {offer.proposer_firstname + ' ' + offer.proposer_lastname}</h5>
      </div>
      <div className="col">
        <div className="btn-group" style={{ marginLeft: "100px" }}>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
          />
          <a href="#" className="btn btn-success" aria-current="page">
            Counteroffer
          </a>
          <a href="#" className="btn btn-warning">
            Match
          </a>
        </div>
      </div>
    </div>
  ); 
}

export default SeedOffer;
