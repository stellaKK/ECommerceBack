import React from 'react';
import SubTitle from "./SubTitle";

//data format: [{date:str, text:str},{},{}...]
export default function MainLog ({title, data}) {
  return (
      <div>
        <SubTitle title={title} />
        {data.map((log, index) =>
            <div key={index}>{log.date}: {log.text}</div>)}
      </div>
  )
}