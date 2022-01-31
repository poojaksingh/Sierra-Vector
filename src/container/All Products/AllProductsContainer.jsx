import AppBar from "../../Components/AppBar/AppBar";
import Tabs from "../../Components/Tabs/Tabs";
import Table from "../../Components/Table/Table";
import Cardblue from "../../Components/Cardblue/Cardblue";

function AllProductsContainer() {
  const TabData = [
    {
      tabName: "Item One",
      tabComponenet: Table,
      tabPadding: 0,
      tabIndex: 0,
      componentData: {
        tableColumns: ["A", "B"],
        tableData: ["abc", "xyz"],
        sortOption: ["Asc", "Desc"],
      },
    },
    {
      tabName: "Pooja",
      tabComponenet: Cardblue,
      tabPadding: 5,
      tabIndex: 1,
      componentData: {},
    },
  ];

  return (
    <AppBar>
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
            <button type="button" className="btn btn-primary py-0">
              <small>+ Add Products</small>
            </button>
          </div>
        </div>
      </div>
      <Tabs TabData={TabData} />
    </AppBar>
  );
}

export default AllProductsContainer;
