import React from 'react';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Title from './Title';
import Typography from '@material-ui/core/Typography';
import { userList } from "../message/MessageMain";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    width: "30px",
    height: "30px",
    objectFit: "cover",
    borderRadius: "50%",
    marginLeft: "5px",
    cursor: "pointer",
  },
  redText: {
    color: "red",
    fontWeight: "bold",
    textDecoration: "underline"
  },
  greenText: {
    color: "green"
  }
});

const displayMsgCount = 2;
// count how many new userList given slice index
function getNewMsgCount(list, index) {
  return list.length - index;
}

export default function MessageOverview() {
  const classes = useStyles();
  const navigate = useNavigate();

  let iconList = userList.slice(displayMsgCount).map((message, index) => {
    return <img src={message.userIcon}  alt={message.user} className={classes.icon} key={index} />
  });

  let newMsgCount = getNewMsgCount(userList, displayMsgCount);
  let countStyle = clsx({
    [classes.greenText]: newMsgCount === 0,
    [classes.redText]: newMsgCount > 0
  });

  return (
      <Card className={classes.root}>
        <CardContent>
          <Title>Internal Messages</Title>
          <Typography variant="h5" component="h2">
            You have <span className={countStyle}>{newMsgCount}</span> new messages.
          </Typography>

          <Typography variant="body2" component="p">
            {iconList}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={()=>navigate("/messages")}>View All</Button>
        </CardActions>
      </Card>
  );
}
