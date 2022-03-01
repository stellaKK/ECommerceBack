import React, {Component} from 'react';
import CustomPriceCalculation from "./CustomPriceCalculation";
import CustomPriceResult from "./CustomPriceResult";
import SubTitle from "../../SubTitle";


class CustomPrice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topData: [],
      cabinetData: [],
      rowId: 1 // keep track item position in the list
    };
  }

  getInput = (data) => {
    // add id to data
    data.id = this.state.rowId;

    if (data.option === "top") {
      this.setState((prevState) => ({
        topData: [...prevState.topData, data],
        rowId: prevState.rowId + 1
      }));
    } else {
      this.setState((prevState) => ({
        cabinetData: [...prevState.cabinetData, data],
        rowId: prevState.rowId + 1
      }));
    }

  };

  // delete result row based on given obj
  deleteRow = (obj) => {
    let result;
    if (obj.option === "top") {
      result = this.state.topData.filter((item)=> item.id !== obj.id);
      this.setState({topData: result});
    } else {
      result = this.state.cabinetData.filter((item)=> item.id !== obj.id);
      this.setState({cabinetData: result});
    }
  };

  render() {
    return (
        <div>
          <SubTitle title="Custom Price Search" />

          <CustomPriceCalculation handleCalculation={this.getInput} />
          <CustomPriceResult topData={this.state.topData} cabinetData={this.state.cabinetData}
                             deleteRow={this.deleteRow} />
        </div>
    );
  }

}

export default CustomPrice;