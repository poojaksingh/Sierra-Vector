import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem, { listItemClasses } from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth = 220;

function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
          <List
            sx={{
              [`& .active, & .${listItemClasses.root}:hover`]: {
                bgcolor: "rgba(33, 150, 243, 0.2)",
              },
              px: 2,
            }}
          >
            <ListItem
              button
              key={"Dashboard"}
              onClick={() => navigate("dashboard")}
              sx={{
                borderRadius: 2,
                bgcolor: pathname === "/dashboard" ? "#2196F3" : "",
                color: pathname === "/dashboard" ? "#fff" : "",
              }}
            >
              <ListItemIcon
                sx={{
                  color: pathname === "/" ? "#fff" : "",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
            <ListItem
              button
              key={"Products"}
              onClick={() => setOpen(!open)}
              // onClick={() => navigate("/")}
              sx={{
                borderRadius: 2,
                bgcolor: pathname === "/" ? "#2196F3" : "",
                color: pathname === "/" ? "#fff" : "",
              }}
            >
              <ListItemIcon>
                <i class="fas fa-box-open"></i>
              </ListItemIcon>
              <ListItemText primary={"Products"} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  key={"All Products"}
                  onClick={() => navigate("allProducts")}
                  sx={{
                    pl: 4,
                    borderRadius: 2,
                    bgcolor: pathname === "/" ? "#2196F3" : "",
                    color: pathname === "/" ? "#fff" : "",
                  }}
                >
                  <ListItemText primary="All Products" />
                </ListItem>
                <ListItem
                  button
                  key={"Categories"}
                  onClick={() => navigate("categories")}
                  sx={{
                    pl: 4,
                    borderRadius: 2,
                    bgcolor: pathname === "/categories" ? "#2196F3" : "",
                    color: pathname === "/categories" ? "#fff" : "",
                  }}
                >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="categories" />
                </ListItem>
                <ListItem
                  button
                  key={"Inventory"}
                  onClick={() => navigate("inventory")}
                  sx={{
                    pl: 4,
                    borderRadius: 2,
                    bgcolor: pathname === "/inventory" ? "#2196F3" : "",
                    color: pathname === "/inventory" ? "#fff" : "",
                  }}
                >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inventory" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              key={"Orders"}
              onClick={() => navigate("orders")}
              sx={{
                borderRadius: 2,
                bgcolor: pathname === "/orders" ? "#2196F3" : "",
                color: pathname === "/orders" ? "#fff" : "",
              }}
            >
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary={"Orders"} />
            </ListItem>
            <ListItem
              button
              key={"Customers"}
              onClick={() => navigate("customer")}
              sx={{
                borderRadius: 2,
                bgcolor: pathname === "/customer" ? "#2196F3" : "",
                color: pathname === "/customer" ? "#fff" : "",
              }}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Customers"} />
            </ListItem>
            <ListItem button key={"Analytics"}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Analytics"} />
            </ListItem>
            <ListItem
              button
              key={"Coupons"}
              onClick={() => navigate("coupons")}
              sx={{
                borderRadius: 2,
                bgcolor: pathname === "/coupons" ? "#2196F3" : "",
                color: pathname === "/coupons" ? "#fff" : "",
              }}
            >
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Coupons"} />
            </ListItem>
            <ListItem button key={"Reviews"}>
              <ListItemIcon>
                <RateReviewIcon />
              </ListItemIcon>
              <ListItemText primary={"Reviews"} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default Sidebar;
