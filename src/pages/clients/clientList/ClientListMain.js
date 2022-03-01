import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ClientListTable from "./ClientListTable";
import ClientListFilter from "./ClientListFilter";
import { getClientListHttp } from "../../../http/ClientHttp";
import DataNotFound from "../../../components/DataNotFound";
import Loading from "../../../components/Loading";
import { getClientError, getClientList, getClientListSuccess,
} from "../../../store/reducers/clientSlice";
import { LOADING, ERROR } from "../../../components/Constants";


class ClientListMain extends Component {

  componentDidMount() {
    const {getClientList, getClientListSuccess, getClientError} = this.props;
    getClientListHttp(getClientList, getClientListSuccess, getClientError, {});
  }
  
  handleFilter = (data) => {
    const {getClientList, getClientListSuccess, getClientError} = this.props;
    getClientListHttp(getClientList, getClientListSuccess, getClientError, data);
  };

  render() {
    const {history, status, clientList, error} = this.props;

    return (
        <div>
          <ClientListFilter search={this.handleFilter} />
          { status === LOADING ? <Loading /> :
              (clientList.length > 0 ?
                  <ClientListTable data={clientList} history={history} /> : (
                      status === ERROR ? <DataNotFound text={error} /> :
                          <DataNotFound text={"Data not found"} />
                  ))}
        </div>
    );
  }
}

function mapStateToProps(state){
  return{
    clientList: state.client.clientList,
    status: state.client.status,
    error: state.client.error
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
      {getClientError, getClientList, getClientListSuccess},
      dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientListMain);