import React from 'react'

function SeedOffer(props) { 
  return (
    <div>
      <h3>{props.offered_seed} for {props.desired_seed}</h3>
      <h7>Offerer: Greg Samson</h7>
      <br />
      <div class="btn-group">
        <a href="#" class="btn btn-success" aria-current="page">Counteroffer</a>
        <a href="#" class="btn btn-warning">Match</a>
      </div>
    </div>
  ); 
}

export default SeedOffer;
