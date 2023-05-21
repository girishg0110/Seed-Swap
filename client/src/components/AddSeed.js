import React, {useState, useEffect} from "react";
import SeedOffer from './SeedOffer'

function AddSeed(props) {
  const [formState, updateFormState] = useState({
    first_name: "",
    last_name: "",
    offered_seed: "",
    offered_amt: "#",
    desired_seed: "",
  });

  const addListing = () => {
    props.setSeedRows([
      <SeedOffer
        offered_seed={formState.offered_seed}
        offered_amt={formState.offered_amt}
        desired_seed={formState.desired_seed}
        proposer={formState.first_name + " " + formState.last_name}
      />,
      ...props.seedRows]
    );
  }
  const handleFirstName = (event) => {
    var newFormState = formState
    newFormState["first_name"] = (event.target.value)
    updateFormState(newFormState)
    console.log(formState)
  }
  const handleLastName = (event) => {
    var newFormState = formState;
    newFormState["last_name"] = event.target.value;
    updateFormState(newFormState);
    console.log(formState);
  };
  const handleOfferedSeed = (event) => {
    var newFormState = formState;
    newFormState["offered_seed"] = event.target.value;
    updateFormState(newFormState);
    console.log(formState);
  };
  const handleDesiredSeed = (event) => {
    var newFormState = formState;
    newFormState["desired_seed"] = event.target.value;
    updateFormState(newFormState);
    console.log(formState);
  };
  const handleOfferedAmt = (event) => {
    var newFormState = formState;
    newFormState["offered_amt"] = event.target.value;
    updateFormState(newFormState);
    console.log(formState);
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
          onChange={handleFirstName}
        />
        <input
          type="text"
          aria-label="Last name"
          className="form-control"
          onChange={handleLastName}
        />
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <select class="form-select" id="inputGroupSelect01" onChange = {handleOfferedAmt}>
              {seedCountOptions}
            </select>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              onChange={handleOfferedSeed}
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
            onChange={handleDesiredSeed}
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
