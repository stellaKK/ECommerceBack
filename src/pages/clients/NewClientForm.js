import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {LOADING} from "../../components/Constants";
import {getClientError} from "../../store/reducers/clientSlice";
import InlineErrorText from "../../components/InlineErrorText";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
    marginTop: "20px"
  },
  container: {
    marginLeft: "10px"
  },
  line: {
    marginLeft: "10px"
  }
}));

const requireFields = [ "firstName", "lastName", "company", "phone", "discount" ];


export default function NewClientForm({handleSubmit, status}) {
  const classes = useStyles();
  // get error message from store
  const { error } = useSelector(state => state.client);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = React.useState("");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = React.useState("");
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const [company, setCompany] = React.useState("");
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const [phone, setPhone] = React.useState("");
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const [email, setEmail] = React.useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [discount, setDiscount] = React.useState(0);
  const handleDiscountChange = (event) => {
    setDiscount(parseInt(event.target.value));
  };


  // return true if field is required
  const isRequired = (option) => {
    return option === 1;
  };

  // check whether have missing fields
  const validateFields = (data) => {
    let keys = Object.keys(data);
    let text = "Missing fields: ";
    let pass = true;
    for (let i = 0; i < keys.length; i++) {
      if (requireFields.includes(keys[i])) {
        if (data[keys[i]] === "") {
          // required field missing
          text += "[" + keys[i] + "]";
          pass = false;
        }
      }
    }
    return { pass: pass, log: text };
  };


  const renderTextField = (label, value, func, required) => {
    return (
        <TextField label={label} size="small" required={isRequired(required)}
                   value={value} onChange={func}
                   variant="outlined" />
    );
  };

  // pass data to parent
  const sendData = () => {
    let data;
    data = { firstName: firstName, lastName: lastName, company: company,
      phone: phone, discount: discount, email: email};
    let result = validateFields(data);
    if (result.pass) {
      handleSubmit(data);
    } else {
      dispatch(getClientError(result.log));
    }

  };

  return (
      <form className={classes.root} noValidate autoComplete="off">

        <div>
          {renderTextField("First Name", firstName, handleFirstNameChange, 1)}
          {renderTextField("Last Name", lastName, handleLastNameChange, 1)}
          {renderTextField("Company Name", company, handleCompanyChange, 1)}
        </div>

        <div>
          {renderTextField("Phone Number", phone, handlePhoneChange, 1)}
          {renderTextField("Email", email, handleEmailChange, 0)}
          {renderTextField("Apply Discount (%)", discount, handleDiscountChange, 1)}
        </div>

        {error !== null ? <InlineErrorText text={error} />:""}

        <div className={classes.container}>
          <Button variant="contained" color="secondary" style={{marginRight: "10px"}}
                  onClick={()=>sendData()} disabled={status===LOADING}>
            {status === LOADING ? "Uploading data... Please do not refresh.":
            "Create Profile"}
          </Button>
        </div>

      </form>
  );
}