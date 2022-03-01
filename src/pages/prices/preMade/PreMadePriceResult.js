import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {themeColors} from "../../../components/ColorConstants";
import {filterObjFields, splitKeyName} from "../../../components/HelperFunctions";


const resultFields = [ "SKU", "type", "material", "sizeWidth", "sizeDepth", "componentPrice", "setPrice" ];

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
});

const isEmpty = (array) => {
  return array.length === 0;
};

export default function PreMadePriceResult ({data}) {
  const classes = useStyles();

  const renderTableHead = (attr) => {
    let data = attr.length > 0 ? attr[0] : "undefined";
    const filtered = filterObjFields(data, resultFields);
    let keys = Object.keys(filtered);
    return (
        <TableRow>
          {keys.map((key, index) =>
              <StyledTableCell key={"table" + index}>{splitKeyName(key)}</StyledTableCell>
          )}
        </TableRow>
    );
  };

  // input is a single object
  const renderTableRow = (obj, index) => {
    const filtered = filterObjFields(obj, resultFields);
    let keys = Object.keys(filtered);
    return (
        <StyledTableRow key={index}>
          {keys.map((key, subIndex) =>
              <StyledTableCell key={subIndex}>{filtered[key]}</StyledTableCell>
          )}
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