import React, {useState, useEffect} from "react";
import SeedOffer from './SeedOffer'

function AddSeed(props) {
  const [formState, setFormState] = useState({
    proposer_firstname: "",
    proposer_lastname: "",
    offered_amt: "#",
    offered_seed: "",
    desired_seed: "",
  });

  const handleFormChange = (event, id) => {
    var newFormState = formState
    const idToField = {0 : 'proposer_firstname', 1:'proposer_lastname', 2:'offered_amt', 3:'offered_seed', 4:'desired_seed'}
    newFormState[idToField[id]] = event.target.value
    setFormState(newFormState)
  }

  const addListing = () => {
    const newOffer = formState
    props.addOffer(newOffer);
  };

  var seedCountOptions = [<option selected>#</option>]
  for (var i = 10; i <= 100; i += 10) {
      seedCountOptions.push(
          <option value={i}>{i}</option>
      )
  }

  return (
    <div className="container">
      <br />
      <h3>Add Listing</h3>

      <div className="input-group">
        <span className="input-group-text">Your name</span>
        <input
          type="text"
          aria-label="First name"
          className="form-control"
          onChange={(event) => handleFormChange(event, 0)}
        />
        <input
          type="text"
          aria-label="Last name"
          className="form-control"
          onChange={(event) => handleFormChange(event, 1)}
        />
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <select
              class="form-select"
              id="inputGroupSelect01"
              onChange={(event) => handleFormChange(event, 2)}
            >
              {seedCountOptions}
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="Offered Seed"
              aria-label="Offered Seed"
              onChange={(event) => handleFormChange(event, 3)}
            />
            <span class="input-group-text">seeds</span>
          </div>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Desired Seed"
            aria-label="Desired Seed"
            onChange={(event) => handleFormChange(event, 4)}
          />
        </div>
        <button class="btn btn-primary" type="button" onClick={addListing}>
          Add
        </button>
      </div>

      <br />
    </div>
  );
}

export default AddSeed;
