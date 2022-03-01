import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MessageToolBar from "./MessageToolBar";
import MessageBox from "./MessageBox";
import MessageInput from "./MessageInput";


const useStyles = makeStyles(() => ({
  root: {
    flexFlow: "column wrap",
    '& > *': {
      // width: theme.spacing(100),
      // height: theme.spacing(16),
      width: "60vw"
    },
  },
}));

export default function MessageContentLayout(props) {
  const classes = useStyles();
  const {chatUser, chatMsg, getInput, loadMessages} = props;

  // it is not allowed to send messages in system channels
  let state = {inputDisable: chatUser.userId === 2200,
  placeHolder: chatUser.userId === 2200 ?
      "Sending messages is not allowed in this channel. Please contact sampleAdmin@gmail.com if you need to." : ""};

  return (
      <div className={classes.root}>
        <MessageToolBar user={chatUser} />
        <MessageBox messages={chatMsg} loadMessages={loadMessages} />

        <MessageInput getInput={getInput} state={state} />
      </div>
  );
}
