import React, {useState}  from "react";
import { useNavigate } from "react-router-dom";
import SectionSubTitle from '../../components/SectionSubTitle';
import NewTaskForm from "./NewTaskForm";


export default function CreateNewTask() {

  const [formError, setFormError] = useState({formError: false});
  // handle form data submission
  const getFormData = (data) => {
    console.log(data);
    setFormError({formError: true});
  };

  const navigate = useNavigate();
    let data = {title: "Create New Task", func: navigate, backUrl: "/tasks"};

    return (
        <div>
          <SectionSubTitle data={data}  />

          <NewTaskForm handleFormData={getFormData} err={formError} />
        </div>
    );
}