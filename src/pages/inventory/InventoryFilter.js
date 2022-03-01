import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import {themeColors} from "../../components/ColorConstants";
import Divider from '@material-ui/core/Divider';


const Types = [
  {value: "top", label: "Top"},
  {value: "cabinet", label: "Cabinet"},
  {value: "all", label: "All"}
];

const Materials = [
  {value: "stone", label: "Stone"},
  {value: "ceramic", label: "Ceramic"},
  {value: "resin", label: "Resin"},
  {value: "solid wood", label: "Solid Wood"},
  {value: "mdf", label: "MDF"},
  {value: "all", label: "All"}
];

const Widths = [
  {value: 24, label: "24 Inches"},
  {value: 30, label: "30 Inches"},
  {value: 36, label: "36 Inches"},
  {value: 42, label: "42 Inches"},
  {value: 48, label: "48 Inches"},
  {value: 60, label: "60 Inches"},
  {value: 72, label: "72 Inches"},
  {value: "all", label: "All"}
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


export default function InventoryFilter({search}) {
  const classes = useStyles();

  const [type, setType] = React.useState('cabinet');
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const [material, setMaterial] = React.useState("mdf");
  const handleMaterialChange = (event) => {
    setMaterial(event.target.value);
  };

  const [width, setWidth] = React.useState(24);
  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const [content, setContent] = React.useState("");
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // create data object when submit button is clicked
  const submitFormData = () => {
    let data = {
      type: type, material: material, width: width, //content: content
    };
    search(data);
  };

  // render selection component
  const renderSelection = (label, value, func, options) => {
    return (
        <TextField select label={label} size="small"
                   value={value} onChange={func}
                   SelectProps={{ native: true, }} variant="outlined">

          {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
          ))}
        </TextField>
    );
  };

  return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">

          {renderSelection("Type", type, handleTypeChange, Types)}
          {renderSelection("Material", material, handleMaterialChange, Materials)}
          {renderSelection("Width", width, handleWidthChange, Widths)}

          <TextField label="Search content"
                     type="search" variant="outlined" size="small"
                     value={content} onChange={handleContentChange}/>

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