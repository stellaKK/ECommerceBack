import Title from './Title';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2021-08', gross: 211234.56, mk: 84921.51, amt: 2400, },
  { name: '2021-09', gross: 201324.85, mk: 73291.12, amt: 2210, },
  { name: '2021-10', gross: 204232.10, mk: 82541.75, amt: 2290, },
  { name: '2021-11', gross: 194123.89, mk: 81294.43, amt: 2000, },
  { name: '2021-12', gross: 182931.21, mk: 79827.32, amt: 2181, },
  { name: '2022-01', gross: 229831.12, mk: 76104.25, amt: 2500, },
  { name: '2022-02', gross: 68529.38, mk: 22312.57, amt: 2100, },
];

export default class Chart extends PureComponent {
  //static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
        <React.Fragment>
          <Title>Recent Sales</Title>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={800}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="gross" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="mk" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </React.Fragment>
    );
  }
}

//
// // Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }
//
// const data = [
//   createData('Jan 7', 470),
//   createData('Jan 8', 300),
//   createData('Jan 9', 600),
//   createData('Jan 10', 800),
//   createData('Jan 11', 1500),
//   createData('Jan 12', 2000),
//   createData('Jan 13', 2400),
//   createData('Jan 14', 2400),
//   createData('Jan 15', undefined),
// ];
//
// export default function Chart() {
//   const theme = useTheme();
//
//   return (
//     <React.Fragment>
//       <Title>Recent Sales</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{ top: 16, right: 16, bottom: 0, left: 24, }}
//         >
//           <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
//           <YAxis stroke={theme.palette.text.secondary}>
//             <Label
//               angle={270} position="left"
//               style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
//             >
//               Sales ($)
//             </Label>
//           </YAxis>
//           <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }
