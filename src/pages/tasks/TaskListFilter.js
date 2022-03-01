import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getCurrentDate } from '../../components/HelperFunctions';
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import {themeColors} from "../../components/ColorConstants";
import Divider from '@material-ui/core/Divider';


const types = [
  {value: "work", label: "Work Schedule"},
  {value: "quote", label: "Quote"},
  {value: "general", label: "General"},
  {value: "type_all", label: "All Types"},
];

const peopleList = [
  {value: "people_all", label: "All People"},
  {value: "amy", label: "Amy"},
  {value: "sandy", label: "Sandy"},
  {value: "may", label: "May"},
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


export default function TaskListFilter() {
  const classes = useStyles();

  const [type, setType] = React.useState('type_all');
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const [people, setPeople] = React.useState("people_all");
  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
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
      type: type, people: people, date: date, content: content
    };
    console.log(data);
  };

  return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField select label="Type" size="small"
                     value={type} onChange={handleTypeChange}
                     SelectProps={{ native: true, }} variant="outlined">

            {types.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
            ))}
          </TextField>

          <TextField select label="Created By" size="small"
                     value={people} onChange={handlePeopleChange}
                     SelectProps={{ native: true, }} variant="outlined">

            {peopleList.map((option) => (
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
                       className={classes.button} endIcon={<SearchIcon>search</SearchIcon>}
                       onClick={()=>submitFormData()}>
            Search
          </ColorButton>

        </form>

        <Divider variant="middle" style={{margin: "10px 0"}} />
      </div>
  );
}
