import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div>
      <div
        className="container-fluid shadow-sm "
        style={{
          position: "relative",
        }}
      >
        <div className="row py-3 px-5">
          <div className="col-3">
            <b>
              <h5>
                Sierra <b className="title">Vector</b>
              </h5>
            </b>
          </div>
          <div className="col-6 px-5">
            <div class="input-group">
              <input
                type="text"
                class="form-control shadow-none search-bar"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append  search_Icon">
                <span
                  class="input-group-text search-bar search_Icon"
                  id="basic-addon2"
                >
                  <SearchIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex flex-row-reverse">
              <small className=" Titlleroy ml-5 ">JUSTIN ROY</small>
              <div className="image-round">
                <img
                  class="rounded-circle mr-5"
                  src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-3--v1.png"
                  height={36}
                  width={36}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
