import React, { useState } from "react";
import {Copyright} from "../dashboard/Copyright";
import MenuBars from "../dashboard/MenuBars";
import "../dashboard/MenuBars.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBarSpacer from "../dashboard/AppBarSpacer";
import { User1, User2, User3, User4, User5, User6, announcement } from "../../assets/user-icon";
import MessageUserList from "./MessageUserList";
import MessageContentLayout from "./MessageContentLayout";
import {getChatMessage} from "../../components/HelperFunctions";

// announcement userId
export const adminId = 2200;

// sample userList
export const userList = [
  { userId: 2351, userName: "Charlene Lindsey", userIcon: User1},
  { userId: 2352, userName: "Ron Price", userIcon: User2},
  { userId: 2353, userName: "Jenna Ortiz", userIcon: User3},
  { userId: 2354, userName: "Jane Bowman", userIcon: User4},
  { userId: 2355, userName: "Conrad Hamilton", userIcon: User5},
  { userId: 2356, userName: "Rachel Garner", userIcon: User6},
];

// sample admin account list
export const sysList = [
  { userId: 2200, userName: "Announcement", userIcon: announcement},
];

// sample messages
export const newMessages = [
  { userId: 2351, message: "Hello, this is the first message.", time: new Date(2021,12,13, 5,35,24) },
  { userId: 2351, message: "This work first begins with a general introduction to biology.", time: new Date(2021,12,15, 10,21,24) },
  { userId: 2352, message: "Hello, very cold today!", time: new Date(2021,12,15, 11,50,39) },
  { userId: 2200, message: `Algorithms in Bioinformatics: Theory and Implementation is a concise yet
  comprehensive textbook of bioinformatics`, time: new Date(2022,1,10, 15,30,21) },
  { userId: 2354, message: "I watched a movie last night, so good.", time: new Date(2022,2,12, 18,49,47) },
];

export const loadMsgs = [
  { userId: 2351, message: "The decision to invoke the Emergencies Act puts the never-before-used emergency", time: new Date(2021,12,10, 13,35,24) },
  { userId: 2351, message: "Today’s vote is not about whether or not the occupation in Ottawa ", time: new Date(2021,12,10, 13,50,24) },
  { userId: 2351, message: "Morrice went on to explain that he believed that current measures", time: new Date(2021,12,10, 15,35,24) },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  layout: {
    display: "flex",

  }
}));



export default function MessageMain() {

  const classes = useStyles();

  // state variable for who's the owner of message box
  const [chatUser, setChatUser] = useState(sysList[0]);
  const [chatMsg, setChatMsg] = useState(getChatMessage(newMessages, sysList[0].userId));

  // get the selected chatId from children
  function chatIdSelect(user) {
    setChatUser(user);
    // get messages from selected user, set the state, pass the content to chatBox
    setChatMsg(getChatMessage(newMessages, user.userId));
  }

  // when user type something, update current messages box and send/save messages on server
  function handleInput(message) {
    // append current message to chatMsg
    setChatMsg([...chatMsg, message]);
  }

  // load previous messages
  function loadMessages() {
    setChatMsg(prevChatMsg => loadMsgs.concat(prevChatMsg));
  }

  return (
      <div className="root">

        <MenuBars title="Messages" />

        <main className="content">
          <AppBarSpacer />
          <div className={classes.layout}>

              <MessageUserList users={userList} sys={sysList} messages={newMessages}
               enterChat={chatIdSelect} />

              <MessageContentLayout chatUser={chatUser} chatMsg={chatMsg}
                                    getInput={handleInput} loadMessages={loadMessages} />
          </div>

          <Copyright />
        </main>
      </div>
  );
}
