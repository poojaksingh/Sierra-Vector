import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../assets/profile.png";

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
              <h5 className="text-dark">
                Sierra <b className="title">Vector</b>
              </h5>
            </b>
          </div>
          <div className="col-6 px-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control shadow-none search-bar"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append  search_Icon">
                <span
                  className="input-group-text search-bar search_Icon"
                  id="basic-addon2"
                >
                  <SearchIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex justify-content-end">
              <div className="px-3">
                <img
                  className="rounded-circle mr-5"
                  alt="dp"
                  src={Logo}
                  height={36}
                  width={36}
                />
              </div>
              <small className=" Titlleroy  text-dark">JUSTIN ROY</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
