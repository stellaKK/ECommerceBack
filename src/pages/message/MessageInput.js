/* textfield to input some text and send button */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ImageIcon from '@material-ui/icons/Image';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
    width: "60vw"
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '95ch',
    },
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
    '& > *': {
      cursor: "pointer"
    }
  },
  button: {
    alignSelf: "flex-end",
    marginLeft: "74ch",
  },
  fieldDisable: {
    backgroundColor: "#E7E7E7",
    "& ::placeholder": {
      color: "black"
    }
  },
}));

export default function MessageInput({getInput, state}) {
  const classes = useStyles();
  const [text, setText] = useState("");

  function handleInput(event) {
    setText(event.target.value);
  }

  // obj fields: userId, message, time
  function handleSubmit() {
    let data = {};
    data.userId = 2300;
    data.message = text;
    data.time = new Date();
    getInput(data);
  }

  return (
      <Paper className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off">

          <div className={classes.toolBar}>
            <ImageIcon color="action" />
            <AttachFileIcon color="action" />
            <EmojiEmotionsIcon color="action" />
            <Button variant="contained" color="primary" disableElevation size="small"
                    className={classes.button} onClick={handleSubmit}>
              Send Message &#8594;
            </Button>
          </div>

          <TextField multiline rows={3} variant="outlined" onChange={handleInput}
                     disabled={state.inputDisable} placeholder={state.placeHolder}
                     className={state.inputDisable ? classes.fieldDisable : ""}/>
        </form>
      </Paper>
  );
}