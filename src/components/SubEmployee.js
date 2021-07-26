import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { baseUrl } from "../config";
import axios from "axios";
import SubEmployeeDataList from "./SubEmployeeDataList";

function SubEmployee(props) {
  const [showEmployee, setShowEmployee] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  const location = useLocation();

  useEffect(() => {
    var currentPath = location.pathname;
    setCurrentUser(currentPath.split('/')[2] && currentPath.split('/')[2]);
    getApiCalls(currentPath.split('/')[2] && currentPath.split('/')[2]);  
  }, []);

  const getApiCalls = (name) => {
    let data = [...showEmployee];
    axios
    .get(`${baseUrl}/${name}`)
    .then(function (response) {
      if (response.data[1]) {
        data.push(response.data[1]["direct-subordinates"]);
        response.data[1]["direct-subordinates"].map((i, index) => {
          getApiCalls(i);
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
     setShowEmployee(data);
  }

  return (
    <Fragment>
        <div className="bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md justify-between hover:bg-gray-300">
          <h3 className="mb-3"> Employee Overview</h3>
          <div>
            <p className="mb-3">Subordinates of employee <b>{currentUser}</b>:</p>
            <SubEmployeeDataList subordinates={showEmployee} currentUser={currentUser} />
          </div>
        </div>
    </Fragment>
  );
}

export default SubEmployee;
