import React from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {themeColors} from "../../components/ColorConstants";
import {uppercaseFirstChar} from "../../components/HelperFunctions";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: themeColors.lightBlue,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: "60vw",
  },
  page: {
    margin: "10px 0 0 10px",
  },
  section: {// component render title & table
    marginTop: "10px"
  },
  outStock: {
    color: "red",
    fontWeight: "bold"
  }
});

const isEmpty = (array) => {
  return array.length === 0;
};

// check if given item is the [inStock]]
const isInStockField = (key) => {
  return key === "inStock";
};

// return "Out of Stock" if stock =0, number if stock > 0
const getAvail = (num) => {
  if (num > 0) {
    return num;
  } else {
    return "Out of Stock";
  }
};

// return according css style for "in stock" or "out of stock"
const isOutOfStock = (num) => {
  return num === 0;
};

export default function InventoryResult ({data}) {
  console.log(data);
  const classes = useStyles();

  const renderTableHead = (attr) => {
    let data = attr.length > 0 ? attr[0] : "undefined";
    let keys = Object.keys(data);
    return (
        <TableRow>
          {keys.map((key, index) =>
              <StyledTableCell key={"table" + index}>{uppercaseFirstChar(key)}</StyledTableCell>
          )}
        </TableRow>
    );
  };

  // input is a single object
  const renderTableRow = (obj, index) => {
    let keys = Object.keys(obj);
    return (
        <StyledTableRow key={index}>
          {keys.map((key, subIndex) =>
              <StyledTableCell key={subIndex}
                               className={clsx(isInStockField(key) && isOutOfStock(obj[key]) && classes.outStock)}>
                {isInStockField(key) ? getAvail(obj[key]) : obj[key]}
              </StyledTableCell>)}
        </StyledTableRow>
    );
  };

  // render whole section view: title + table
  const renderSection = (data, indexPrefix) => {
    return (
        <TableContainer className={classes.section}>
          <Table className={classes.table} aria-label="customized table" size="small">
            <TableHead>
              {renderTableHead(data)}
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                  renderTableRow(row, indexPrefix + index)
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
  };

  return (
      <div className={classes.page}>

        {isEmpty(data) ? "" :
            renderSection(data, "row_", "Top Price Calculation")
        }

      </div>

  );
}