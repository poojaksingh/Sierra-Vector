import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "../Navbar/Navbar";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
const drawerWidth = 240;
function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem
              button
              key={"Send email"}
              sx={{
                color: "blue",
              }}
            >
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Send email"} />
            </ListItem>
            <ListItem button key={"All mail"} onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"All mail"} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button key={"Starred"} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button key={"Send email"}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Send email"} />
            </ListItem>
            <ListItem button key={"Send email"}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Send email"} />
            </ListItem>
            <ListItem button key={"Send email"}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Send email"} />
            </ListItem>
            <ListItem button key={"Send email"}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Send email"} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default Sidebar;
