import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import Container from '@material-ui/core/Container';
import OrderMain from "../orders/OrderMain";
import TaskMain from "../tasks/TaskMain";
import TaskDetail from "../taskDetail/TaskDetail";
import CreateNewTask from "../tasks/CreateNewTask";
import MessageMain from "../message/MessageMain";
import PricesMain from "../prices/PricesMain";
import ClientPageMain from "../clients/ClientPageMain";
import {Copyright} from "./Copyright";
import MenuBars from "./MenuBars";
import "./MenuBars.css";
import DashboardContent from "./DashboardContent";
import AppBarSpacer from "./AppBarSpacer";


export default function Dashboard() {

  let renderView;
  // conditional render page title
  let paths = window.location.pathname.split('/');
  let subPath = paths[1];
  let subPath2 = paths[2];
  let sectionTitle = "Dashboard";

  /* path direct */
  switch (subPath) {

    case "invoices":
      renderView = <OrderMain />;
      sectionTitle = "Invoices";
      break;
    case "tasks":
      if (!subPath2) {
        // url: /tasks
        renderView = <TaskMain />;
      } else if (subPath2 === "new") {
          // url: /tasks/new
          renderView = <CreateNewTask />;
      } else {
        // url: /tasks/12873
        renderView = <TaskDetail taskID={subPath2} />;
      }
      sectionTitle = "Tasks";
      break;
    case "messages":
      renderView = <MessageMain />;
      sectionTitle = "Messages";
      break;
    case "prices":
      renderView = <PricesMain />;
      sectionTitle = "Prices";
      break;
    // case "inventory":
    //   renderView = <InventoryMain />;
    //   sectionTitle = "Inventory";
    //   break;
    case "clients":
      renderView = <ClientPageMain />;
      sectionTitle = "Clients";
      break;
    default:
      renderView = <DashboardContent />;

  }

  // handle authorized user redirect
  const { isAuthUser } = useSelector(state => state).user;
  if (!isAuthUser) {
    return <Navigate to="/login" />;
  }

  return (

      <div className="root">

        <MenuBars title={sectionTitle} />

        <main className="content">
          <AppBarSpacer />
          <Container maxWidth="lg" className="container">
            {renderView}
          </Container>

          <Copyright />
        </main>
      </div>
  );
}