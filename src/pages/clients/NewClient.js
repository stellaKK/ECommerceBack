import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewClientForm from "./NewClientForm";
import SubTitle from "../SubTitle";
import { createNewClient, createNewClientSuccess, getClientError } from "../../store/reducers/clientSlice";
import {createClientDetailHttp} from "../../http/ClientHttp";
import LinkMessage from "../../components/LinkMessage";


export default function NewClient () {

  const { uploadStatus, clientId } = useSelector((state) => state.client);
  const dispatch = useDispatch();

  const getInput = (data) => {
    createClientDetailHttp(dispatch, createNewClient, createNewClientSuccess, getClientError, data);
  };

  // create redirect link after profile is created
  const createLink = (id) => {
    let text1 = "Client profile created. ";
    let text2 = "to go to profile.";
    return <LinkMessage text1={text1} text2={text2} url={"/clients/" + id} />;
  };

  return (
      <div>
        <SubTitle title="Create Client Profile" />
        <NewClientForm handleSubmit={getInput} status={uploadStatus} />
        {clientId !== "" ?
            createLink(clientId):
            ""}
      </div>
  )
}