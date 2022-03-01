/** a user title bar with icon and username, placed in title bar at the top **/
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {themeColors} from "../../components/ColorConstants";
import {signOut, signOutSuccess} from "../../store/reducers/userSlice";
import { userSignOutHttp } from "../../http/UserHttp";
import {SelfIcon} from "../../assets/user-icon/index";


const useStyles = makeStyles(() => ({
  root: {
    margin: "0 20px",
    padding: "5px 10px",
    width: "110px",
    cursor: "pointer",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
    }
  },
  icon: {
    width: "30px",
    height: "30px",
    objectFit: "cover",
    borderRadius: "50%",
    marginRight: "10px",
  },
  userName: {
    position: "relative",
    top: "-5px",
    color: "#ECECEC"
  },
  dropdown: {
    position: "absolute",
    top: "50px",
    right: "92px",
    color: "black",
    width: "110px",
  },
  dropdownItem: {
    padding: "10px",
    color: "white",
    borderTop: "1px solid rgba(255,255,255,0.5)",
    backgroundColor: themeColors.lightBlue2,
    "&:hover": {
      backgroundColor: themeColors.sideMenuBg2,
      color: "white"
    }
  }
}));

export default function UserTitle() {

  const classes = useStyles();
  const [dropdown, setDropdown] = React.useState(false);
  const handleClickDropdown = () => {
    setDropdown(!dropdown);
  };

  const { userDetail } = useSelector(state => state).user;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    userSignOutHttp(dispatch, signOut, signOutSuccess);
  };

  return (
      <span className={classes.root}>
        <div onClick={()=>handleClickDropdown()}>
           <img src={SelfIcon} className={classes.icon} alt="user" />
          <span className={classes.userName}>{userDetail.username}</span>
        </div>

        {dropdown ? (
            <div className={classes.dropdown}>
              <div className={classes.dropdownItem}>Profile</div>
              <div className={classes.dropdownItem} onClick={()=>handleLogOut()}>Log out</div>
            </div>
        ) : ""}

      </span>
  );

}