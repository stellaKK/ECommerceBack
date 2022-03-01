import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainLog from "../MainLog";
import SubTitle from "../SubTitle";
import InfoIcon from '@material-ui/icons/Info';
import InventoryFilter from "./InventoryFilter";
import InventoryResult from "./InventoryResult";
import UpdateInventoryMain from "./UpdateInventoryMain";
import {getProductList, getProductListSuccess, getDataError} from "../../store/reducers/productSlice";
import {getProductListHttp} from "../../http/ProductHttp";
import Container from '@material-ui/core/Container';
import {Copyright} from "../dashboard/Copyright";
import MenuBars from "../dashboard/MenuBars";
import "../dashboard/MenuBars.css";
import AppBarSpacer from "../dashboard/AppBarSpacer";


const logs = [
  {date: "2021-5-12", text: "Member [Amy] updated inventory list"},
  {date: "2021-5-9", text: "Member [Bill] updated inventory list"},
  {date: "2021-3-25", text: "Member [Amy] updated inventory list"},
  {date: "2021-1-9", text: "Member [Sam] updated inventory list"},
  {date: "2020-12-9", text: "Member [Sam] updated inventory list"},

];


class InventoryMain extends Component {

  handleFilter = (data) => {
    console.log(data);
    const { getProductList, getProductListSuccess, getDataError } = this.props;
    getProductListHttp(getProductList, getProductListSuccess, getDataError);
  };

  render() {

    const path = window.location.pathname;
    let paths = path.split("/");
    console.log(paths);

    // determine which view need to be rendered
    let view = "There are some errors.";
    if (paths.length === 2) {
      // on parent root
      view = (
        <div>
          <SubTitle title="Inventory List" />
          <InventoryFilter search={this.handleFilter} />
          <InventoryResult data={this.props.productList} />
        </div>);
    } else if (paths.length === 3) {
        // sub route
      if (paths[2] === "update") {
        view = <UpdateInventoryMain />;
      } else if (paths[2] === "logs") {
        view = <MainLog title="Inventory Update Log" data={logs} />;
      }
    }

    return (

      <div className="root">

        <MenuBars title="Inventory" />

        <main className="content">
          <AppBarSpacer />
          <Container maxWidth="lg" className="container">
            <a href={"/inventory/logs"} style={{textDecoration: "none"}}><InfoIcon /></a>
            {view}
          </Container>

          <Copyright />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { productList: state.product.productList }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProductList, getProductListSuccess, getDataError}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryMain);