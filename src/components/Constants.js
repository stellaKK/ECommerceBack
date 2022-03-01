export const companyName = "Koniship Inc.";

export const customOptions = [
  {value: "top", label: "Quartz Top"},
  {value: "cabinet", label: "Cabinet"}
];

export const  stoneBrandOptions = [
  {value: "tdStone", label: "TD Stone"},
  {value: "goldStar", label: "Gold Star"}
];

// cabinet material
export const materialOptions = [
  {value: "mdf", label: "MDF"},
  {value: "solid", label: "Solid Wood"}
];

export const topColorOptions = [
  {value: 1001, label: 1001},
  {value: 1002, label: 1002},
  {value: 1003, label: 1003},
  {value: 1004, label: 1004},
  {value: 1005, label: 1005},
];

export const cabinetColorOptions = [
  {value: 3001, label: 3001},
  {value: 3002, label: 3002},
  {value: 3003, label: 3003},
  {value: 3004, label: 3004},
  {value: 3005, label: 3005},
];

export const thicknessOptions = [
  {value: "singleEdge", label: "Single-Edge"},
  {value: "doubleEdge", label: "Double-Edge"}
];

export const sinkOptions = [
  {value: "singleSink", label: "Single Sink"},
  {value: "doubleSinks", label: "Double Sinks"}
];

export const sideSplashOptions = [
  {value: "sideSplash_0", label: 0},
  {value: "sideSplash_1", label: 1},
  {value: "sideSplash_2", label: 2}
];

// price factors
export const factorMdfWidth = 9.8;
export const factorSolidWidth = 14;
export const factorTopWidth = 5.6;
export const factorThickness = 1.5;
export const factorSplash = 15;
export const factorDrawerSet = 175;


//-------------------store
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const IDLE = "IDLE";