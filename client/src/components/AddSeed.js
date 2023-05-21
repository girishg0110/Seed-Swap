import React from "react";

function AddSeed() {
    var seedCountOptions = [<option selected>#</option>]
    for (var i = 1; i < 11; i++) {
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
        <input type="text" aria-label="First name" className="form-control" />
        <input type="text" aria-label="Last name" className="form-control" />
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
          <select class="form-select" id="inputGroupSelect01">
            {seedCountOptions}
            </select>            
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
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
          />
        </div>
        <button class="btn btn-primary" type="button">Add</button>
      </div>

      <br />
    </div>
  );
}

export default AddSeed;
