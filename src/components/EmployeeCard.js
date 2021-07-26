import axios from "axios";
import React, { Fragment, useState } from "react";
import Employee from "../assets/images/employee.png";
import { baseUrl } from "../config";
import SubEmployee from "./SubEmployee";

function EmployeeCard({ name }) {
  const [employeesByName, setEmployeesByName] = useState([]);
  const [showSubEmployee, setShowSubEmployee] = useState(false);

  const onGetOverView = (name) => {

    // let temp = [...employeesByName];
    // setShowSubEmployee(true);
    // axios
    //   .get(`${baseUrl}/${name}`)
    //   .then(function (response) {
    //     // temp.push({'position':response.data[0], 'direct-subordinates': []});
    //     if (response.data[1]) {
    //       temp.push(response.data[1]["direct-subordinates"]);
    //       response.data[1]["direct-subordinates"].map((i, index) => {
    //         // temp.push(i);
    //         // if(temp[0]['direct-subordinates'][index]){
    //         // temp[0]['direct-subordinates'][index].push({'position':response.data[0], 'direct-subordinates': []})
    //         // }else {
    //         //     temp[0]['direct-subordinates'].push(i);
    //         // }
    //         onGetOverView(i);
    //       });
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {});
    // console.log("data::", temp);
    // setEmployeesByName(temp);
  };

//   async function callApi(name) {
//     let data = [];
//     axios
//       .get(`${baseUrl}/${name}`)
//       .then(function (response) {
//         // temp.push({'position':response.data[0], 'direct-subordinates': []});
//         if (response.data[1]) {
//           data.push(response.data[1]["direct-subordinates"]);
//           response.data[1]["direct-subordinates"].map((i, index) => {
//             // temp.push(i);
//             // if(temp[0]['direct-subordinates'][index]){
//             // temp[0]['direct-subordinates'][index].push({'position':response.data[0], 'direct-subordinates': []})
//             // }else {
//             //     temp[0]['direct-subordinates'].push(i);
//             // }
//             callApi(i);
//           });
//           //   console.log("data::", data);
//           return data;
//         } else {
//           return data;
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//       .then(function () {});
//   }

  return (
    <Fragment>
        <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300">
          <img
            style={{ maxWidth: "60px" }}
            className="rounded-full shadow-md border border-gray-300"
            src={Employee}
            alt="employee"
          />
          <p className="font-bold text-md">{name}</p>
          <a href={`/overview/${name}`}
            className="bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 mr-4 hover:bg-yellow-500 hover:text-white"
          >
            Overview
          </a>
        </div>
    </Fragment>
  );
}

export default EmployeeCard;
