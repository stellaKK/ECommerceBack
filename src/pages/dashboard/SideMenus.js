// import {Link, withRouter} from "react-router-dom";
// import React, {Component} from 'react';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import StoreIcon from '@material-ui/icons/Store';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import {themeColors} from "../../components/ColorConstants";
import {goToUrl} from "../../components/HelperFunctions";


const mainItems = [
  {title: "Dashboard", url: "/", icon: <DashboardIcon />},
  {title: "Invoices", url: "/invoices", icon: <ShoppingCartIcon />,
    subTitles: [
      {title: "Create New Invoice", url: "/invoices/new"}
    ]},
  {title: "Product Prices", url: "/prices", icon: <AttachMoneyIcon />,
    subTitles: [
      {title: "Update Product Prices", url: "/prices/update"},
      {title: "Search Prices", url: "/prices/search?type=preMade"}
    ]},
  {title: "Inventory", url: "/inventory", icon: <StoreIcon />,
    subTitles: [
      {title: "Update Inventory", url: "/inventory/update"}
    ]},
  {title: "Clients", url: "/clients", icon: <PeopleIcon />,
    subTitles: [
      {title: "Create Client Profile", url: "/clients/new"}
    ]}
];

const secondItems = [
  {title: "Messages", url: "/messages", icon: <MailOutlineIcon />},
  {title: "Tasks", url: "/tasks", icon: <AssignmentIcon />,
    subTitles: [
      {title: "Create New Task", url: "/tasks/new"}
    ]}
];

const linkUrls = ["/prices/search"];



export default function SideMenus() {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     subMenuOpen: false
  //   };
  // };

  const isExpandable = (item) => {
    return item.subTitles && item.subTitles.length > 0;
  };

  // render link (open in new tab) for component
  const renderSpecialLink = (item, index, history) => {
    if (linkUrls.includes(item.url)) {
      //return <Link to="item.url" target="_blank">test</Link>
      return (
          <Link to={item.url} target="_blank" key={"subTitle"+index}
            style={{textDecoration: "none", color: "white"}}>
            <ListItem style={{height: "20px"}}>
              <div style={{marginLeft: "56px", cursor: "pointer"}}>- {item.title}</div>
            </ListItem>
          </Link>
      );
    } else {
      return (
          <ListItem key={"subTitle"+index} onClick={()=>goToUrl(history, item.url)}
                    style={{height: "20px"}}>
            <div style={{marginLeft: "56px", cursor: "pointer"}}>- {item.title}</div>
          </ListItem>
      );
    }
  };

  const getSubChildren = (titles, history) => {

    return titles.map((sub, index) =>
      renderSpecialLink(sub, index, history),
    )
  };

    // const { history } = this.props;
  const navigate = useNavigate();

    let mainListItems = mainItems.map((item, index) =>
        <div key={"menu"+index}>
          <ListItem button onClick={()=>goToUrl(navigate, item.url)}>
            <ListItemIcon style={{color: themeColors.sideMenuIcon}}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
          {/* Display the expand menu if the item has children */}
          {isExpandable(item) ?
              getSubChildren(item.subTitles, navigate)
              : ""}
        </div>
    );

    let secondaryListItems = secondItems.map( (item, index) =>
        <div key={"secondMenu"+index}>
          <ListItem button onClick={()=>goToUrl(navigate, item.url)}>
            <ListItemIcon style={{color: themeColors.sideMenuIcon}}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
          {/* Display the expand menu if the item has children */}
          {isExpandable(item) ?
              getSubChildren(item.subTitles, navigate)
              : ""}
        </div>
    );

    return (
        <div>
          {mainListItems}
          <Divider variant="middle" style={{background: "rgba(255,255,255,0.75)", marginTop: "20px"}} />
          <ListSubheader style={{color: "rgba(255,255,255,0.7)"}} inset>Personal Management</ListSubheader>
          {secondaryListItems}
        </div>
    )

}
