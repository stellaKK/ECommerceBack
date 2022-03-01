import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import {themeColors} from "../../../components/ColorConstants";
import Divider from '@material-ui/core/Divider';


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


export default function ClientListFilter({search}) {
  const classes = useStyles();

  const [firstName, setFirstName] = React.useState('');
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const [phone, setPhone] = React.useState("");
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };


  // create data object when submit button is clicked
  const submitFormData = () => {
    let data = {};
    if (firstName !== "") {
      data.firstName = firstName;
    }
    if (phone !== "") {
      data.phone = parseInt(phone);
    }
    search(data);
  };

  const renderTextField = (label, value, func) => {
    return (
        <TextField label={label} type="search"
                   variant="outlined" size="small"
                   value={value} onChange={func}/>
    );
  };

  return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">

          {renderTextField("First Name", firstName, handleFirstNameChange)}
          {renderTextField("Phone Number", phone, handlePhoneChange)}

          <ColorButton variant="contained" color="primary"
                       className={classes.button} endIcon={<SearchIcon />}
                       onClick={()=>submitFormData()}>
            Search
          </ColorButton>

        </form>

        <Divider variant="middle" style={{margin: "10px 0"}} />
      </div>
  );
}