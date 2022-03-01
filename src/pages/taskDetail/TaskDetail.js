import React from "react";
import { useNavigate } from "react-router-dom";
import SectionSubTitle from '../../components/SectionSubTitle';
import TaskDetailContent from "../taskDetail/TaskDetailContent";
import TaskContentInput from "./TaskContentInput";
import DetailList from "./DetailList";


// create Date object
const createDate = (year=2021, month=1, day=1, hours=0, minutes=0, seconds=0) => {
  return new Date(year, month, day, hours, minutes, seconds);
};

//sample data
const detailData = {
  taskId: 1209, taskType: "Quote", createBy: "Amy",
  createDate: "2021-5-13", dueDate: "2021-6-10", status: "Ongoing",
};

const contents = [
  {sender: "Amy", date: createDate(2021, 5,13,12,13,1), message: "first data create"},
  {sender: "Sam", date: createDate(2021, 5,14,15,40,36), message: "follow up!"},
  {sender: "Amy", date: createDate(2021, 5,14,13,25,12), message: "3rd data create"},
  {sender: "Amy", date: createDate(2021, 5,17,8,35,47), message: "4th data create"},
  {sender: "Amy", date: createDate(2021, 5,19,18,2,22), message: "5th data create. phone num: 0378 2302837. 5th data create. phone num: 0378 2302837. 5th data create. phone num: 0378 2302837. 5th data create. phone num: 0378 2302837. 5th data create. phone num: 0378 2302837. 5th data create. phone num: 0378 2302837"},
];


export default function TaskDetail({ taskID }) {

  // get data from child component - input field and send to server
  const handleInput = (data) => {
    console.log("parent received: " + data);
  };
  const navigate = useNavigate();

  //const { taskID, history } = this.props;
  let data = {title: "Task #" + taskID + " Detail", func: navigate, backUrl: "/tasks"};
  return (
      <div>
        <SectionSubTitle data={data} />
        <TaskDetailContent data={detailData} />
        <TaskContentInput getInput={handleInput} />
        <DetailList data={contents} />
      </div>
  );
}
