import React from "react";
import {useNavigate} from "react-router-dom";
import SubTitle from "../SubTitle";
import ClientListMain from "./clientList/ClientListMain";
import ClientDetailMain from "./clientDetail/ClientDetailMain";
import NewClient from "./NewClient";
import Container from '@material-ui/core/Container';
import {Copyright} from "../dashboard/Copyright";
import MenuBars from "../dashboard/MenuBars";
import "../dashboard/MenuBars.css";
import AppBarSpacer from "../dashboard/AppBarSpacer";


export default function ClientPageMain() {

  const path = window.location.pathname;
  let paths = path.split("/");
  console.log(path);

  const navigate = useNavigate();

    // determine which view need to be rendered
    let view = "There are some errors.";
    if (paths.length === 2) {
      // on parent root
      view = (
          <div>
            <SubTitle title="Client List" />
            <ClientListMain history={navigate} />
          </div>);
    } else if (paths.length === 3) {
      // sub route
      if (paths[2] === "new") {
        view = <NewClient />;
      } else {
        view = <ClientDetailMain clientId={paths[2]} history={navigate} />;
      }
    }

    return (
        <div className="root">

          <MenuBars title="Client Management" />

          <main className="content">
            <AppBarSpacer />
            <Container maxWidth="lg" className="container">
              {view}
            </Container>

            <Copyright />
          </main>
        </div>
    );
}