import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { withStyles} from "@material-ui/core";
import ClientProfileHead from "./ClientProfileHead";
import SectionSubTitle from "../../../components/SectionSubTitle";
import ClientProfileFields from "./ClientProfileFields";
import IconBtn from '../../../components/IconBtn';
import { ReactComponent as OrderImg } from '../../../assets/web/order.svg';
import {themeColors} from "../../../components/ColorConstants";
import {getClientDetailHttp, updateClientDetailHttp} from "../../../http/ClientHttp";
import Loading from "../../../components/Loading";
import DataNotFound from "../../../components/DataNotFound";
import {getClientDetail, getClientDetailSuccess, getClientError,
updateClientDetailSuccess, updateClientDetail} from "../../../store/reducers/clientSlice";
import { LOADING, ERROR } from "../../../components/Constants";


const styles = () => ({
  contentContainer: {
    display: "flex"
  },
  btnSection: {
    marginTop: "20px"
  }
});


class ClientDetailMain extends Component {

  componentDidMount() {
    const {getClientDetail, getClientDetailSuccess, getClientError} = this.props;
    getClientDetailHttp(getClientDetail, getClientDetailSuccess, getClientError, this.props.clientId);
  }

  handleDataSubmit = (data) => {
    const { clientId } = this.props;
    const {updateClientDetailSuccess, updateClientDetail, getClientError} = this.props;
    updateClientDetailHttp(updateClientDetail, updateClientDetailSuccess, getClientError, clientId, data);
  };

  render() {
    const { classes, clientId, history } = this.props;
    const {clientDetail, status, error, uploadStatus} = this.props;

    let data = {title: "Client Profile", func: history, backUrl: "/clients"};
    let orderBtnData = {
      icon: <OrderImg fill={themeColors.lightBlue2} width="20" height="20" />, text: "Order History",
      color: themeColors.lightBlue2, hoverColor: themeColors.lightGrey2,
      url: "/clients/" + clientId + "?action=orders"
    };

    return (
        <div>
          <SectionSubTitle data={data} />
          {status === LOADING ? <Loading />: (
              Object.keys(clientDetail).length > 0 ? (
                  <div>
                    <div className={classes.contentContainer}>
                      <ClientProfileHead data={clientDetail} />
                      <ClientProfileFields data={clientDetail} submitData={this.handleDataSubmit}
                                          updateStatus={uploadStatus}/>
                    </div>

                    <div className={classes.btnSection}>
                      <IconBtn history={history} data={orderBtnData} />
                    </div>
                  </div>
              ) : (
                  status === ERROR ? <DataNotFound text={error} /> : <DataNotFound text={"Data not found"} />
              )
          )}

        </div>
    );
  }
}

function mapStateToProps(state){
  return{
    clientDetail: state.client.clientDetail,
    status: state.client.status,
    uploadStatus: state.client.uploadStatus,
    error: state.client.error
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
      {getClientDetail, getClientDetailSuccess, getClientError,
        updateClientDetailSuccess, updateClientDetail,},
      dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ClientDetailMain));