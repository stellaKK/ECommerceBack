import React from "react";
import { useNavigate } from "react-router-dom";
import TaskListCard from "./TaskListCard";


// sample data
const taskListTitles = [
  {taskNum: 12931, title: "Adam quote", type: "Quote", createBy: "Amy", dueDate: "2021-5-26", content: "Need to contact customer when the item is arrived."},
  {taskNum: 12932, title: "Transfer From", type: "Work Schedule", createBy: "Bill", dueDate: "2021-6-10", content: "Need to contact customer when the item is arrived."},
  {taskNum: 12933, title: "Adam quote", type: "Quote", createBy: "Amy", dueDate: "2021-6-10", content: "Need to contact customer when the item is arrived."},
  {taskNum: 12934, title: "Adam quote", type: "Quote", createBy: "Sandy", dueDate: "2021-6-12", content: "Need to contact customer when the item is arrived."},
  {taskNum: 12935, title: "Adam quote", type: "Work Schedule", createBy: "Amy", dueDate: "2021-3-10", content: "Need to contact customer when the item is arrived."},
  {taskNum: 12936, title: "Adam quote", type: "Quote", createBy: "Amy", dueDate: "2021-8-9",
    content: "Need to arrange delivery. Need to arrange delivery. Need to arrange delivery. Need to arrange delivery. Need to arrange delivery. Need to arrange delivery. Need to arrange delivery. " +
        "Need to arrange delivery. Need to arrange delivery. Need to arrange delivery. Need to arrange delivery. "}
];
// sort decreasing
taskListTitles.sort((a,b) => (a.taskNum < b.taskNum) ? 1 : ((b.taskNum < a.taskNum) ? -1 : 0));

export default function TaskList() {

  const navigate = useNavigate();

  return (
      <div>

        {taskListTitles.map(title =>
          <TaskListCard data={title} key={title.taskNum} history={navigate} />
        )}

      </div>
  );
}
