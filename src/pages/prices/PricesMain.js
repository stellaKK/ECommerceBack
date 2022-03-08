//import React, {Component} from "react";
import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CustomPrice from "./custom/CustomPrice";
import UpdatePriceMain from "./UpdatePriceMain";
import PriceTopMenu from "./PriceTopMenu";
import MainLog from "../MainLog";
import PreMadePrice from "./preMade/PreMadePrice";
// import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import {Copyright} from "../dashboard/Copyright";
import MenuBars from "../dashboard/MenuBars";
import "../dashboard/MenuBars.css";
import AppBarSpacer from "../dashboard/AppBarSpacer";


const logs = [
  {date: "2021-5-12", text: "Member [Amy] updated price list"},
  {date: "2021-5-9", text: "Member [Bill] updated price list"},
  {date: "2021-3-25", text: "Member [Amy] updated price list"},
  {date: "2021-1-9", text: "Member [Sam] updated price list"},
  {date: "2020-12-9", text: "Member [Sam] updated price list"},

];

// class PricesMain extends Component {
export default function PricesMain() {

  const [activeSection, setActiveSection] = useState("");
  const setActiveTitle = (item) => {
    setActiveSection({activeSection: item.label});
  };

    let location = useLocation();
    let paths = location.pathname.split('/');
    //let paths = window.location.pathname.split('/');
    const navigate = useNavigate();

    // check current section
    let view = "There are some errors.";
    if (paths.length > 2) {
      let subPath = paths[2];
      if (subPath === "update") {
        view = <UpdatePriceMain />;
      } else if (subPath === "search") {
        // get query params after ?=
        let delim = "=";
        //let query = window.location.search; //eg, ?type=custom
        let query = location.search; //eg, ?type=custom
        let temp = query.slice(1).split(delim);
        if (temp[1] === "custom") {
          view = <CustomPrice />;
        } else if (temp[1] === "preMade") {
            view = <PreMadePrice />;
        } else {
          view = <MainLog title="Price Update Log" data={logs} />;
        }
      }
    } else {
          view = <MainLog title="Price Update Log" data={logs} />;
    }

    return (
        <div className="root">

          <MenuBars title="Prices" />

          <main className="content">
            <AppBarSpacer />
            <Container maxWidth="lg" className="container">
              <PriceTopMenu history={navigate} current={activeSection}
              setActive={setActiveTitle} />
              {view}
            </Container>

            <Copyright />
          </main>
        </div>
    );
  // }
}