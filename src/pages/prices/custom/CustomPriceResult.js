import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Divider } from '@material-ui/core';
import {themeColors} from "../../../components/ColorConstants";
import DeleteIcon from "../../../assets/web/trash.svg";
import SubTitle from "../../SubTitle";


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
  sectionTitle: {
    fontSize: "16px",
    fontStyle: "italic"
  },
  icon: {
    width: "16px",
    height: "16px",
    marginTop: "5px",
    cursor: "pointer",
  }
});

// return a string with uppercase first letter
const uppercaseFirstChar = (string="") => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// remove "option" & "note" & "id" column of given array (list of object keys)
const modifyList = (keys) => {
  let result;
  keys = keys.slice(1); // remove first attribute
  result = keys.filter(function (el) {
    return el !== "option" && el !== "note" && el !== "id";
  });
  return result;
};

const isEmpty = (array) => {
  return array.length === 0;
};

export default function CustomPriceResult ({topData, cabinetData, deleteRow}) {
  //console.log(topData);
  const classes = useStyles();

  const renderTableHead = (attr) => {
    let data = attr.length > 0 ? attr[0] : "undefined";
    let keys = Object.keys(data);
    return (
        <TableRow>
          {modifyList(keys).map((key, index) =>
            <StyledTableCell key={"table" + index}>{uppercaseFirstChar(key)}</StyledTableCell>
          )}
          <StyledTableCell />
        </TableRow>
    );
  };

  // input is a single object
  const renderTableRow = (obj, index) => {
    let keys = Object.keys(obj);
    return (
        <StyledTableRow key={index}>
          {modifyList(keys).map((key, subIndex) =>
              <StyledTableCell key={subIndex}>{obj[key]}</StyledTableCell>
          )}
          <td><img src={DeleteIcon} className={classes.icon}  alt="delete"
              onClick={()=>deleteRow(obj)} /></td>
        </StyledTableRow>
    );
  };

  // render whole section view: title + table
  const renderSection = (data, indexPrefix, title) => {
    return (
        <TableContainer className={classes.section}>
          <div className={classes.sectionTitle}>{title}</div>
          <Table className={classes.table} aria-label="customized table" size="small">
            <TableHead>
              {renderTableHead(data)}
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                  renderTableRow(row, indexPrefix+index)
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
  };

  const infoText = "(The result in this section won't be saved when you refresh or close the window.)";

  return (
      <div className={classes.page}>

        <Divider light />
        <SubTitle title="Result" info={infoText} />

        {isEmpty(topData) ? "":
            renderSection(topData, "row_", "Top Price Calculation")
        }

        {isEmpty(cabinetData) ? "":
            renderSection(cabinetData, "row2_", "Cabinet Price Calculation")
        }


      </div>

  );
}