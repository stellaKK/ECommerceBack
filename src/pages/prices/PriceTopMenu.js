import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {makeStyles} from "@material-ui/core";
import {goToUrl} from "../../components/HelperFunctions";


const useStyles = makeStyles({
  link: {
    cursor: "pointer"
  },
  container: {
    width: "50vw",
    border: "1px dotted grey",
    padding: "5px 0 5px 20px",
    borderRadius: "10px",
    marginBottom: "5px"
  }
});

const menus = [
  {label: "update", text: "Update Product Price", url: "/prices/update"},
  {label: "searchCustom", text: "Custom Price Search", url: "/prices/search?type=custom"},
  {label: "searchPreMade", text: "Pre-made Model Price Search", url: "/prices/search?type=preMade"},
];

const handleClick = (history, data, func)=> {
  goToUrl(history, data.url);
  // update current section css
  func(data);
};

// check whether current block is active
function isActive(data, current) {
  return data.label === current;
}

export default function PriceTopMenu({history, current, setActive}) {
  const classes = useStyles();

  return (
      <Breadcrumbs aria-label="breadcrumb" className={classes.container}>
        {menus.map((menu, index) =>
            <Link color={isActive(menu, current) ? "primary" : "inherit"}
                  onClick={()=>handleClick(history, menu, setActive)}
                  className={classes.link} key={index}>
              {menu.text}
            </Link>
        )}
      </Breadcrumbs>
  );
}
