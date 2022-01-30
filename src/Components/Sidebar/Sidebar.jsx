import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CustomTable from "../CustomTable/CustomTable";
import Tabs from "../Tabs/Tabs";
import Cardblue from "../Cardblue/Cardblue";

// import { makeStyles } from "@mui/styles";
function Sidebar() {
  const drawerWidth = 200;

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <List>
          {[
            "Inbox",
            "Starred",
            "Send email",
            "Drafts",
            "Orders",
            "Analytics",
            "Coupons",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div
        className="container-fluid w-75 border mt-5 shadow"
        style={{ marginLeft: "20%", borderRadius: "10px" }}
      >
        <Tabs />
        <Cardblue style={{ width: "50%", borderRadius: "15px" }} />
      </div>
    </div>
  );
}

export default Sidebar;
