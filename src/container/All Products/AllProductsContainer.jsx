import Tabs from "../../Components/Tabs/Tabs";
import { TabData } from "./TabData";

function AllProductsContainer() {
  return (
    <>
      <div className="container-fluid py-2 px-0">
        <div className="d-flex bd-highlight p-0">
          <div className=" flex-grow-1">
            <b>All Products</b>
          </div>
          <div className="p-2">
            <small>Export list</small>
          </div>
          <div className="p-2">
            <small>Import list</small>
          </div>
          <div className="p-2">
            <button
              type="button"
              className="btn btn-primary py-1"
              style={{
                backgroundColor: "#4AA2FA",
                border: "none",
                fontSize: "12px",
              }}
            >
              <small>+ Add Products</small>
            </button>
          </div>
        </div>
      </div>
      <Tabs TabData={TabData} />
    </>
  );
}

export default AllProductsContainer;
