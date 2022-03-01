import React from 'react';
import {makeStyles} from "@material-ui/core";
import {themeColors} from "../components/ColorConstants";


const useStyles = makeStyles(() => ({
  container: {
    borderTop: "1px dotted " + themeColors.sideMenuBg2,
    borderBottom: "1px dotted " + themeColors.sideMenuBg2,
    width: "30vw",
    padding: "10px",
    display: "flex",
    marginLeft: "20px"
  },
  uploadImg: {
    width: "60px",
  },
  item: {
    padding: "10px"
  },
  button: {
    border: "0.5px dotted "+themeColors.darkGrey,
    cursor: "pointer",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: themeColors.lightBlue,
      color: "white"
    }
  }
}));


export default function UploadFile({data, handleFileUpload}) {
  const classes = useStyles();

  const [input, setInput] = React.useState(null);
  const handleInputChange = (file) => {
    setInput(file);
  };

  return(
      <div className={classes.container}>
        {/*<img src={UploadIcon} className={classes.uploadImg} alt="upload" />*/}
        <input type="file" onChange={handleInputChange} accept={data.acceptType}
               className={classes.item} />
        <div onClick={()=>handleFileUpload(input)}
                className={classes.button + " " + classes.item}>
          Upload
        </div>
      </div>
  )
}