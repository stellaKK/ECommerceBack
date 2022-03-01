import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import {getCurrentDate} from "../../components/HelperFunctions";
import {themeColors} from "../../components/ColorConstants";


// sample data
const types = [
  {value: "work", label: "Work Schedule"},
  {value: "quote", label: "Quote"},
  {value: "general", label: "General"},
];

const user = "Amy";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: "10px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  colorButton: {
    color: "white",
    backgroundColor: themeColors.sideMenuBg2,
    '&:hover': {
      backgroundColor: themeColors.lightBlue2,
    },
  }
}));


export default function NewTaskForm(props) {
  const classes = useStyles();

  const {handleFormData, err} = props;
  const formSubmit = () => {
    handleFormData({
      taskType: taskType, dueDate: dueDate, taskTitle: title, taskDetail: detail
    });
  };

  const [taskType, setTaskType] = React.useState('work');
  const handleTypeChange = (event) => {
    setTaskType(event.target.value);
  };

  const [dueDate, setDueDate] = React.useState(getCurrentDate());
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const [title, setTitle] = React.useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [detail, setDetail] = React.useState("");
  const handleDetailChange = (event) => {
    setDetail(event.target.value);
  };

  let msg = err ? <Alert severity="error">Failed to create new task. Please try again.</Alert>:"";

  return (
      <div>
        {msg}

        <form className={classes.root} noValidate autoComplete="off">

          <div>
            <TextField id="outlined-select-createTaskType" required
                select label="Task Type" size="small"
                value={taskType} onChange={handleTypeChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined">
              {types.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
              ))}
            </TextField>

            <TextField id="taskDueDate" label="Due Date" required
                type="date" value={dueDate} onClick={handleDueDateChange}
                className={classes.textField} variant="outlined" size="small"
                InputLabelProps={{
                  shrink: true,
                }}
            />

            <TextField id="outlined-read-only-CreateBy" disabled
                label="Created By" size="small"
                defaultValue={user}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined" />

            <TextField id="outlined-read-only-CurrentDate" disabled
                       label="Create Date" size="small"
                       defaultValue={getCurrentDate()}
                       InputProps={{
                         readOnly: true,
                       }}
                       variant="outlined" />
          </div>

          <TextField id="taskTitle" label="Task Title" required
              style={{ margin: 8, width: "80vw" }}
              placeholder="Enter Task Title" fullWidth margin="normal"
              value={title} onChange={handleTitleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined" />

          <TextField id="taskDetail" label="Task Detail" required
             multiline rows={8} style={{ width: "80vw" }}
             InputLabelProps={{
               shrink: true,
             }}
              value={detail} onChange={handleDetailChange}
              placeholder="Enter Task detail here..."
              variant="outlined" />



            <Button variant="contained" className={classes.margin + " " + classes.colorButton}
                    style={{ margin: 8}} onClick={()=> formSubmit()}>
              Create
            </Button>

      </form>
    </div>
  );
}
