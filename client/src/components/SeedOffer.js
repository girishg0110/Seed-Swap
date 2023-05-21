import React from 'react'

function SeedOffer(props) { 
  return (
    <div className="row" style={{ marginBottom: "30px" }}>
      <div className="col">
        <h3 style={{ marginLeft: "50px" }}>
          {props.offered_seed} for {props.desired_seed}
        </h3>
        <h7 style={{ marginLeft: "50px" }}>Offerer: {props.proposer}</h7>
      </div>
      <div className="col">
        <div class="btn-group" style={{ marginLeft: "100px" }}>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
          />
          <a href="#" class="btn btn-success" aria-current="page">
            Counteroffer
          </a>
          <a href="#" class="btn btn-warning">
            Match
          </a>
        </div>
      </div>
    </div>
  ); 
}

export default SeedOffer;
