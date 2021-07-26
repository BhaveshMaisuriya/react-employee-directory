import React, { Fragment, useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../config";
import axios from "axios";

function SubEmployeeDataList({ subordinates, currentUser }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (subordinates) {
      let data = [...employees];
      data.push(subordinates);
      setEmployees(data);
    }
  }, [subordinates]);

  return (
    <Fragment>
      <ul className='ml-3'>
        {employees &&
          employees.map((item, index) => {
            return (
              <Fragment>
                {item.length > 0 && index === 1 && <b>direct-subordinates:</b>}
                {item.length > 0 && index === 2 && <b>non-direct-subordinates:</b>}
                {item.length > 0 && (
                  <ul className='ml-3'>
                    {item[0].map((item1, index1) => {
                      return <li>{item1}</li>;
                    })}
                  </ul>
                )}
              </Fragment>
            );
          })}
      </ul>
    </Fragment>
  );
}

export default SubEmployeeDataList;
