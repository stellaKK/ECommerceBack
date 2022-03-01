import React from 'react';
import {makeStyles} from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {themeColors} from "../../../components/ColorConstants";
import { LOADING, SUCCESS, ERROR } from "../../../components/Constants";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
    marginTop: "20px",
  },
  container: {
    //backgroundColor: "green",
    width: "70%",
    marginLeft: "20px",
    padding: "20px",
    borderLeft: "1px solid " + themeColors.lightBlue,
  },
  switchBtn: {
    float: "right",
  },
  btn: {
    float: "right"
  },
  status: {
    float: "right",
    margin: "15px 20px 0 0",
  }
}));


export default function ClientProfileFields ({data, submitData, updateStatus}) {

  let fieldData = data;

  const classes = useStyles();

  // check if it's in editable or read only mode
  const [state, setState] = React.useState({
    isEditable: false,
    originalData: fieldData
  });

  const handleModeChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [firstName, setFirstName] = React.useState(fieldData.firstName);
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = React.useState(fieldData.lastName);
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const [company, setCompany] = React.useState(fieldData.company);
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const [phone, setPhone] = React.useState(fieldData.phone);
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const [email, setEmail] = React.useState(fieldData.email);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [discount, setDiscount] = React.useState(fieldData.discount);
  const handleDiscountChange = (event) => {
    setDiscount(parseInt(event.target.value));
  };

  // return true if field is required
  const isRequired = (option) => {
    return option === 1;
  };

  // 1=disable, 0=not
  const isDisable = (option) => {
    return option === 1;
  };

  // determine status text color
  const getStatusColor = (status) => {
    if (status === ERROR) {
      return "red";
    } else if (status === SUCCESS) {
      return "green";
    } else {
      return "";
    }
  };


  const renderTextField = (label, value, func, required, disabled) => {
    return (
        <TextField label={label} size="small" required={isRequired(required)}
                   value={value} onChange={func} disabled={isDisable(disabled)}
                   variant="outlined" />
    );
  };

  const sendData = () => {
    let data = {};
    let old = state.originalData;

    // if submitted data is different from original, update it in this object
    if (firstName !== old.firstName) {
      data.firstName = firstName;
    }
    if (lastName !== old.lastName) {
      data.lastName = lastName;
    }
    if (company !== old.company) {
      data.company = company;
    }
    if (phone !== old.phone) {
      data.phone = phone;
    }
    if (email !== old.email) {
      data.email = email;
    }
    if (discount !== old.discount) {
      data.discount = discount;
    }
    if (Object.keys(data).length !== 0) {
      submitData(data);
    }
  };

  return (
      <div className={classes.container}>
        <FormControlLabel className={classes.switchBtn}
            control={<Switch checked={state.isEditable} onChange={handleModeChange} name="isEditable" />}
            label="Edit Mode" />

        <form className={classes.root}>
          <div>
            {renderTextField("Client ID", fieldData._id, null, 0, 1)}
            {renderTextField("First Name", firstName, handleFirstNameChange, 1,
            state.isEditable ? 0 : 1)}
            {renderTextField("Last Name", lastName, handleLastNameChange, 1,
                state.isEditable ? 0 : 1)}
            {renderTextField("Company Name", company, handleCompanyChange, 1,
                state.isEditable ? 0 : 1)}
          </div>

          <div>
            {renderTextField("Phone Number", phone, handlePhoneChange, 1,
                state.isEditable ? 0 : 1)}
            {renderTextField("Email", email, handleEmailChange, 0,
                state.isEditable ? 0 : 1)}
            {renderTextField("Apply Discount (%)", discount, handleDiscountChange, 1,
                state.isEditable ? 0 : 1)}
          </div>

          <Button variant="contained" color="secondary" className={classes.btn}
                  disabled={!state.isEditable} onClick={()=>sendData()}>
            Submit Changes
          </Button>
        </form>
        <div className={classes.status} style={{color: getStatusColor(updateStatus)}}>{updateStatus === LOADING ?
            "Uploading... please do not refresh the page." : (
                updateStatus === SUCCESS ? "Update information succeed." : (
                    updateStatus === ERROR ? "Some errors happen. Please try again." : ""
                )
            )}</div>
      </div>
  )
}