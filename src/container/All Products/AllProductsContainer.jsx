import AppBar from "../../Components/AppBar/AppBar";
import Tabs from "../../Components/Tabs/Tabs";

function AllProductsContainer() {
  return (
    <AppBar>
      <div className="container-fluid py-2 px-0">
        <div class="d-flex bd-highlight p-0">
          <div class=" flex-grow-1">
            <b>All Products</b>
          </div>
          <div class="p-2">
            <small>Export list</small>
          </div>
          <div class="p-2">
            <small>Import list</small>
          </div>
          <div class="p-2">
            <button type="button" class="btn btn-primary py-0">
              <small>+ Add Products</small>
            </button>
          </div>
        </div>
      </div>
      <Tabs />
    </AppBar>
  );
}

export default AllProductsContainer;
