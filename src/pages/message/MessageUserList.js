/*a column show a list of users*/
import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import { userHasNewMsg, userHasNoMsg } from "../../components/HelperFunctions";
import { themeColors } from "../../components/ColorConstants";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // paper: {
  //   marginRight: theme.spacing(2),
  // },
  listIcon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "5px 10px 5px 0"
  },
  boldName: {
    fontWeight: "bold",
    // color: themeColors.lightBlueHover
  },
  selectedRow: {
    backgroundColor: themeColors.lightGrey2
  },
  title: {
    fontSize: "20px",
    margin: "5px",
    padding: "5px",
    textAlign: "center",
    color: themeColors.sideMenuBg2,
  }
}));

export default function MessageUserList(props) {
  const classes = useStyles();
  let {users, sys, messages, enterChat} = props;
  // keep track which user is being selected
  const [chatUser, setChatUser] = useState(sys[0]);

  function userSelect(user) {
    setChatUser(user);
    enterChat(user);
  }

  // check if a single admin has new messages
  // admin: obj; newMessages: list of obj
  function sysHasNewMsg(admin, newMessages) {
    return newMessages.some((message) => message.userId === admin.userId);
  }

  // create a user row who has new message
  function createNewBlock(user, index) {
    return (
        <MenuItem key={index} onClick={()=>userSelect(user)}
                  className={chatUser.userId === user.userId ? classes.selectedRow : ""}>
          <Badge color="secondary" variant="dot"
                 anchorOrigin={{ vertical: 'top', horizontal: 'left'}}>
            <Avatar alt={user.userName} src={user.userIcon} className={classes.listIcon} />
          </Badge>
          <span className={classes.boldName}>{user.userName}</span>
        </MenuItem>)
  }

  // create a user row who has no new message
  function createBlock(user, index) {
    return (
        <MenuItem key={index} onClick={()=>userSelect(user)}
                  className={chatUser.userId === user.userId ? classes.selectedRow : ""}>
          <Avatar alt={user.userName} src={user.userIcon} className={classes.listIcon} />
          {user.userName}
        </MenuItem>)
  }

  // render user list
  // need to split userList into 2:
  // users have new messages, users don't have new messages
  let messageKeys = messages.map((message) => message.userId);
  let userNew = userHasNewMsg(messageKeys, users);
  let userNoNew = userHasNoMsg(messageKeys, users);

  // no.1 user is admin, which should be always on the top
  // conditional render admin user row style
  let sysRow;
  if (sysHasNewMsg(sys[0], messages)) {
    sysRow = createNewBlock(sys[0], 1200);
  } else {
    sysRow = createBlock(sys[0], 1200);
  }

  let userNewList = userNew.map((user, index) => {
    return createNewBlock(user, index);
  });
  let userNoNewList = userNoNew.map((user, index) => {
    return createBlock(user, index);
  });

  return (
      <div className={classes.root}>
        <Paper>
          <div className={classes.title}>Contact List</div>
          <Divider variant="middle" />
          <MenuList>
            {sysRow}
            {userNewList}
            {userNoNewList}
          </MenuList>
        </Paper>
      </div>
  );
}
