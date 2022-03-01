import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import SubTitle from '../../SubTitle';
import PreMadePriceFilter from "./PreMadePriceFilter";
import PreMadePriceResult from "./PreMadePriceResult";
import DataNotFound from "../../../components/DataNotFound";
import Loading from "../../../components/Loading";
import {LOADING} from "../../../components/Constants";
import { getProductListHttp } from "../../../http/ProductHttp";
import {getProductList, getProductListSuccess, getDataError} from "../../../store/reducers/productSlice";


// const data = [
//   {SKU: "VP1830", type: "Cabinet", material: "MDF", width: 30, price: 519},
//   {SKU: "VP3030", type: "Cabinet", material: "Solid Wood", width: 30, price: 629},
//   {SKU: "VP1030", type: "Cabinet", material: "MDF", width: 30, price: 229},
// ];

class PreMadePrice extends Component {

  handleSearch = (data) => {
    const {getProductList, getProductListSuccess, getDataError} = this.props;
    getProductListHttp(getProductList, getProductListSuccess, getDataError, data);
  };

  render() {
    const { productList, status } = this.props;

    return (
        <div>
          <SubTitle title="Pre-made Models Search" />
          <PreMadePriceFilter search={this.handleSearch} />
          <SubTitle title="Search Result" />

          {status === LOADING ? <Loading />:""}

          {productList.length === 0 ? <DataNotFound text="No data found" /> :
              <PreMadePriceResult data={productList} />}
        </div>
    );
  }
}

function mapStateToProps(state){
  return{
    productList: state.product.productList,
    status: state.product.status,
    error: state.product.error
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
      {getProductList, getProductListSuccess, getDataError},
      dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PreMadePrice);