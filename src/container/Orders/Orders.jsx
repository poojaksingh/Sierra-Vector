import Tabs from "../../Components/Tabs/Tabs";
import Cardblue from "../../Components/Cardblue/Cardblue";
import { TabData } from "./TabData";

function Orders() {
  return (
    <>
      <div className="container-fluid py-2 px-0">
        <div className="d-flex  p-0">
          <div className="p-2">
            <b>Orders</b>
          </div>
          <div className="p-2">
            <small>calendar</small>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="d-flex  p-0">
          <div className="p-2">
            <Cardblue />
          </div>
          <div className="p-2">
            <Cardblue />
          </div>
          <div className="p-2">
            <Cardblue />
          </div>
        </div>
      </div>

      <Tabs TabData={TabData} />
    </>
  );
}

export default Orders;
