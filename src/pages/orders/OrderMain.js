import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import {Copyright} from "../dashboard/Copyright";
import MenuBars from "../dashboard/MenuBars";
import "../dashboard/MenuBars.css";
import AppBarSpacer from "../dashboard/AppBarSpacer";
import OrderList from "./OrderList";
import OrderListFilter from "./OrderListFilter";


class OrderMain extends Component {
  render() {
    return (

      <div className="root">

        <MenuBars title="Invoices" />

        <main className="content">
          <AppBarSpacer />
          <Container maxWidth="lg" className="container">
            <OrderListFilter />
            <OrderList />
          </Container>

          <Copyright />
        </main>
      </div>
    );
  }
}

export default OrderMain;