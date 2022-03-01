import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { customOptions, stoneBrandOptions, materialOptions, topColorOptions, cabinetColorOptions,
  thicknessOptions, sinkOptions, sideSplashOptions,
  factorMdfWidth, factorSolidWidth, factorSplash, factorThickness, factorTopWidth, factorDrawerSet,
} from "../../../components/Constants";


const getTopPrice = (width, sideSplashNum, thickness) => {
  let price;
  sideSplashNum = parseInt(sideSplashNum.slice(-1));
  let edge = thickness === "singleEdge" ? 1 : factorThickness;
  price = (width * factorTopWidth + sideSplashNum * factorSplash) * edge;
  return Math.ceil(price);
};

const getCabinetPrice = (material, width, drawerNum) => {
  let price;
  if (material === "mdf") {
    price = width * factorMdfWidth + drawerNum * factorDrawerSet;
  } else {
    // solid wood
    price = width * factorSolidWidth + drawerNum * factorDrawerSet;
  }
  return Math.ceil(price);
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    width: "60vw",
    display: "grid",
    gridTemplateRows: "auto auto",
    justifyItems: "end",
  },
}));


export default function CustomPriceCalculation({handleCalculation}) {
  const classes = useStyles();

  const [option, setOption] = React.useState('top');
  const handleOptionChange = (event) => {
    console.log(event.target.value);
    setOption(event.target.value);
  };

  const [brand, setBrand] = React.useState('tdStone');
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const [material, setMaterial] = React.useState('mdf');
  const handleMaterialChange = (event) => {
    setMaterial(event.target.value);
  };

  const [color, setColor] = React.useState(1001);
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const [width, setWidth] = React.useState(24);
  const handleWidthChange = (event) => {
    setWidth(parseInt(event.target.value));
  };

  const [depth, setDepth] = React.useState(22);
  const handleDepthChange = (event) => {
    setDepth(parseInt(event.target.value));
  };

  const [thickness, setThickness] = React.useState("singleEdge");
  const handleThicknessChange = (event) => {
    setThickness(event.target.value);
  };

  const [sink, setSinks] = React.useState("singleSink");
  const handleSinkChange = (event) => {
    setSinks(event.target.value);
  };

  const [sideSplash, setSideSplash] = React.useState(sideSplashOptions[0].value);
  const handleSplashChange = (event) => {
    setSideSplash(event.target.value);
  };

  const [note, setNote] = React.useState("");
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const [drawerNum, setDrawerNum] = React.useState(0);
  const handleDrawerNumChange = (event) => {
    setDrawerNum(parseInt(event.target.value));
  };

  // check whether top/cabinet option is selected
  const isTop = (option) => {
    return option === "top";
  };

  // helper function to render textfield based on data input
  const renderOptions = (label, value, func, data) => {
    return (
        <TextField size="small" select
                   label={label} value={value} onChange={func}
                   SelectProps={{ native: true }} variant="outlined">

          {data.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
          ))}
        </TextField>
    );
  };

  const renderTextField = (label, value, func) => {
    return (
        <TextField label={label} size="small"
                   value={value} onChange={func}
                   variant="outlined" />
    );
  };

  const renderTextFieldDisabled = (label, defaultValue) => {
    return (
        <TextField disabled label={label} size="small"
                   defaultValue={defaultValue} variant="outlined"
                   InputProps={{
                     readOnly: true,
                   }} />
    );
  };

   // pass data to parent
  const sendData = () => {
    let data = {};
    let price;
    if (option === "top") {
      price = getTopPrice(width, sideSplash, thickness);
      data = {
        option: option, brand: brand, color: color,
        width: width, depth: depth,
        thickness: thickness, sink: sink, sideSplashNum: sideSplash, note: note,
        price: price, id: 0
      };
    } else {
      price = getCabinetPrice(material, width, drawerNum);
      data = {
        option: option, material: material, color: color,
        width: width, depth: depth, setOfDrawer: drawerNum, note: note,
        price: price, id: 0
      };
    }
    //getCabinetPrice = (material, width, drawerNum)
    //getTopPrice = (width, sideSplashNum, thickness)
    handleCalculation(data);
  };

  return (
      <form className={classes.root} noValidate autoComplete="off">

        <div>
          {renderOptions("Custom Option", option, handleOptionChange, customOptions)}
          {isTop(option) ? renderOptions("Brand", brand, handleBrandChange, stoneBrandOptions):
              renderOptions("Material", material, handleMaterialChange, materialOptions)}
          {isTop(option) ? renderOptions("Color Code", color, handleColorChange, topColorOptions):
              renderOptions("Color Code", color, handleColorChange, cabinetColorOptions)}
        </div>

        <div>
          {renderTextField("Size - width", width, handleWidthChange)}
          {renderTextField("Size - depth", depth, handleDepthChange)}
        </div>

        {isTop(option) ?
            <div>
              <div>
                {renderOptions("Edge Thickness", thickness, handleThicknessChange, thicknessOptions)}
                {renderOptions("Sink Number", sink, handleSinkChange, sinkOptions)}

                {renderTextFieldDisabled("Faucet Hole", "Single")}
              </div>

              <div>
                {renderTextFieldDisabled("Back Splash", 1)}
                {renderOptions("Side Splash Number", sideSplash, handleSplashChange, sideSplashOptions)}
              </div>
            </div>:
            <div>
              <TextField label="Sets of drawer" size="small"
                         value={drawerNum} onChange={handleDrawerNumChange} variant="outlined" />
            </div>}

        <div className={classes.container}>
          <TextField label="Additional Notes"
                     multiline rows={4} style={{ width: "60vw" }}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     value={note} onChange={handleNoteChange}
                     placeholder="Additional notes need to consider? Write down here..."
                     variant="outlined" />
          <Button variant="contained" color="secondary" style={{marginRight: "10px"}}
                  onClick={()=>sendData()}>
            Calculate Price
          </Button>
        </div>

      </form>
  );
}