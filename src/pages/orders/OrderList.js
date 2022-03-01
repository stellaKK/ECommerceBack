import React from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import {createMuiTheme} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import {themeColors} from "../../components/ColorConstants";
import {getObjValues} from "../../components/HelperFunctions";
import TablePaginationActions from "../../components/TablePaginationActions";


const tableAttr = [
  "Invoice Number", "Create Date", "Location",
  "Amount ($)", "Status"
];

// sample data
const orderListData = [
  {invoiceNum: 1001, createDate: "2021-3-12", location: "Markham", amount: 199, status: "Completed"},
  {invoiceNum: 1002, createDate: "2021-3-12", location: "Markham", amount: 1199, status: "Completed"},
  {invoiceNum: 1003, createDate: "2021-3-13", location: "Mississauga", amount: 12549, status: "Ordered"},
  {invoiceNum: 1004, createDate: "2021-3-13", location: "Markham", amount: 1949, status: "Delivery"},
  {invoiceNum: 1005, createDate: "2021-3-13", location: "Mississauga", amount: 469, status: "Ordered"},
  {invoiceNum: 1006, createDate: "2021-3-14", location: "Mississauga", amount: 849, status: "Completed"},
  {invoiceNum: 1007, createDate: "2021-3-15", location: "Markham", amount: 429, status: "Completed"},
  {invoiceNum: 1008, createDate: "2021-3-15", location: "Markham", amount: 439, status: "Completed"},
  {invoiceNum: 1009, createDate: "2021-3-16", location: "Mississauga", amount: 1499, status: "Ordered"},
  {invoiceNum: 1010, createDate: "2021-3-16", location: "Mississauga", amount: 2499, status: "Ordered"},
  {invoiceNum: 1011, createDate: "2021-3-17", location: "Mississauga", amount: 32499, status: "Completed"},
  {invoiceNum: 1012, createDate: "2021-3-17", location: "Mississauga", amount: 32499, status: "Completed"},
  {invoiceNum: 1013, createDate: "2021-3-17", location: "Mississauga", amount: 32499, status: "Completed"},
  {invoiceNum: 1014, createDate: "2021-3-17", location: "Mississauga", amount: 32499, status: "Completed"},
  {invoiceNum: 1015, createDate: "2021-3-17", location: "Mississauga", amount: 32499, status: "Completed"},
  {invoiceNum: 1016, createDate: "2021-3-17", location: "Mississauga", amount: 32499, status: "Completed"},
  {invoiceNum: 1017, createDate: "2021-3-17", location: "Mississauga", amount: 32499, status: "Completed"},
];

const rowsPerPage = 15;

// create new color
const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeColors.sideMenuBg2,
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderLeft: "1px solid white",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "#DAEDF2",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  statusComplete: {
    color: "green",
    fontWeight: "bold"
  },
  statusOngoing: {
    color: "red"
  }
});

// determine color of status text (complete: green)
const checkStatusComplete = (status) => {
  return status === "Completed";
};

// remove first and last element of an object's values
const removeHeadTail = (obj) => {
  let result = getObjValues(obj);
  result.pop();
  result.shift();
  return result;
};


export default function OrderList() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  return (
      <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="customized sticky table">

          <TableHead>
            <StyledTableRow>
              {tableAttr.map((row, index) =>
                    <StyledTableCell align="center" key={index}>{row}</StyledTableCell>
              )}
            </StyledTableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
                    ? orderListData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : orderListData
            ).map((row) => (
                <StyledTableRow key={row.invoiceNum}>
                  <StyledTableCell align="center" component="th" scope="row">
                    #{row.invoiceNum}
                  </StyledTableCell>

                  {removeHeadTail(row).map((item) => (
                      <StyledTableCell align="center" key={item}>{item}</StyledTableCell>
                  ))}

                  <StyledTableCell align="center"
                     className={clsx(checkStatusComplete(row.status) && classes.statusComplete,
                         !checkStatusComplete(row.status) && classes.statusOngoing)}>
                    {row.status}</StyledTableCell>
                </StyledTableRow>
            ))}

          </TableBody>


          <TableFooter>
            <TableRow>
              <TablePagination
                  rowsPerPageOptions={[]} colSpan={3}
                  count={orderListData.length}
                  rowsPerPage={rowsPerPage} page={page}
                  onChangePage={handleChangePage}
                  ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      </ThemeProvider>
  );
}
