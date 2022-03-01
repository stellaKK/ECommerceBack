import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(() => ({
  root: {
    padding: "10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    marginLeft: "10px",
    cursor: "pointer"
  },
  title: {
    alignSelf: "flex-start"
  }
}));


// handle tool actions: stick to top, voice call, video call
const tools = {
  "top": "pin to top",
  "voice": "start voice call",
  "video": "start video call"
};
function handleToolOpen(action) {
  alert(tools[action]);
}

export default function MessageToolBar(props) {
  const classes = useStyles();
  const {user} = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <Paper className={classes.root}>
        <div className={classes.title}>Messages from: {user.userName} </div>
        <ArrowUpward className={classes.icon} color="action" onClick={()=>handleToolOpen("top")} />
        <AddIcCallIcon className={classes.icon} color="action" onClick={()=>handleToolOpen("voice")} />
        <VideoCallIcon className={classes.icon} color="action" onClick={()=>handleToolOpen("video")} />

        <MenuIcon className={classes.icon} color="action" onClick={handleClick} />
        <Menu id="simple-menu" anchorEl={anchorEl}
            keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Shared Files</MenuItem>
          <MenuItem onClick={handleClose}>User Detail</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
        </Menu>

      </Paper>
  );
}