import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getCurrentDate } from '../../components/HelperFunctions';
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import {themeColors} from "../../components/ColorConstants";
import Divider from '@material-ui/core/Divider';


const locations = [
  {value: "mk", label: "Markham"},
  {value: "ss", label: "Mississauga"},
  {value: "ws", label: "Oshawa"},
  {value: "location_all", label: "All Locations"},
];

const statusList = [
  {value: "status_all", label: "All Status"},
  {value: "complete", label: "Completed"},
  {value: "ordered", label: "Ordered"},
  {value: "delivery", label: "Delivery"},
  {value: "delivered", label: "Delivered"}
];

const ColorButton = withStyles(() => ({
  root: {
    backgroundColor: themeColors.sideMenuBg2,
    '&:hover': {
      backgroundColor: themeColors.lightBlueHover,
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "auto",
  },
  button: {
    margin: theme.spacing(1),
  },
}));


export default function OrderListFilter() {
  const classes = useStyles();

  const [location, setLocation] = React.useState('location_all');
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const [status, setStatus] = React.useState("status_all");
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const [date, setDate] = React.useState(getCurrentDate());
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const [content, setContent] = React.useState("");
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // create data object when submit button is clicked
  const submitFormData = () => {
    let data = {
      location: location, status: status, date: date, content: content
    };
    console.log(data);
  };

  return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField select label="Location" size="small"
              value={location} onChange={handleLocationChange}
              SelectProps={{ native: true, }} variant="outlined">

              {locations.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
              ))}
          </TextField>

          <TextField select label="Status" size="small"
                     value={status} onChange={handleStatusChange}
                     SelectProps={{ native: true, }} variant="outlined">

            {statusList.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
            ))}
          </TextField>

          <TextField  id="date" label="Date" type="date" size="small"
              variant="outlined" value={date}
              className={classes.textField} onChange={handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
          />

          <TextField id="outlined-search" label="Search content"
                     type="search" variant="outlined" size="small"
                     value={content} onChange={handleContentChange}/>

          <ColorButton variant="contained" color="primary"
              className={classes.button} endIcon={<Icon>send</Icon>}
              onClick={()=>submitFormData()}>
            Filter
          </ColorButton>

        </form>

        <Divider variant="middle" style={{margin: "10px 0"}} />
      </div>
  );
}
