import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {themeColors} from "../../components/ColorConstants";


const useStyles = makeStyles(() => ({
  root: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  colorButton: {
    color: "white",
    backgroundColor: themeColors.sideMenuBg2,
    '&:hover': {
      backgroundColor: themeColors.lightBlue2,
    },
    width: "100px",
  }
}));


export default function TaskContentInput({getInput}) {

  const classes = useStyles();

  const [input, setInput] = React.useState("");
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
      <div className={classes.root}>
        <TextField id="taskContent" label="Add new content" required
                   multiline rows={4} style={{ width: "60vw" }}
                   InputLabelProps={{
                     shrink: true,
                   }}
                   value={input} onChange={handleInputChange}
                   placeholder="Enter Task detail here..."
                   variant="outlined" />
        <Button variant="contained" className={classes.margin + " " + classes.colorButton}
                style={{ margin: 8}} onClick={()=>getInput(input)}>
          Add
        </Button>
      </div>
  )
}