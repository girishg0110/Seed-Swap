import React from "react";
import leaf from "../static/leaf_wallpaper.jpg";
import SeedList from './SeedList'

function HomeScreen() {
  return (
    <main>
      <div
        className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"
        style={{ backgroundImage: `URL(${leaf})` }}
      >
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Seed Swap</h1>
          <p className="lead fw-normal">
            <strong>
              A secondary market connecting local plant and flower growers.
            </strong>
          </p>
          <a className="btn btn-outline-secondary" href="/offers">
            <strong>See offers</strong>
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

    </main>
  );
}

export default HomeScreen;
