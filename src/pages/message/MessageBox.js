/* space of holding actual message list */
import React, { useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MessageBoxLine from "./MessageBoxLine";
import MessageBoxLineSelf from "./MessageBoxLineSelf";


const useStyles = makeStyles(() => ({
  root: {
    padding: "10px",
    height: "60vh",
    backgroundColor: "#F0F1F6",
    overflowY: "auto",
    position: "relative",
  },
  prevMsgBtn: {
    textAlign: "center",
    fontSize: "10px",
    cursor: "pointer"
  }
}));


export default function MessageBox({messages, loadMessages}) {
  const classes = useStyles();
  // always stay at the bottom of chatbox
  const messagesEndRef = useRef(null);

  let content = messages.length > 0 ? messages.map((msg, index) =>
    msg.userId === 2300 ? <MessageBoxLineSelf key={index} data={msg} /> :
        <MessageBoxLine key={index} data={msg} />
      )
      : "";

  // always stay at the bottom of chatbox
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth", inline: "center" })
  };
  useEffect(scrollToBottom, [messages]);

  return (
      <Paper className={classes.root}>
        <div className={classes.prevMsgBtn} onClick={()=>loadMessages()}>- see previous 20 messages -</div>
        {content}
        <div ref={messagesEndRef} />
      </Paper>
  );
}