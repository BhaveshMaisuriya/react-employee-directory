import React, { Fragment, useEffect, useState } from "react";
import Navigation from "./Navigation";
import EmployeeCardList from "./EmployeeCardList";
import axios from "axios";
import { baseUrl } from "../config";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [data, setEmployees] = useState([]);

  useEffect(() => {
    getEmployeeList();
  }, []);

  const getEmployeeList = () => {
    axios
      .get(`${baseUrl}`)
      .then(function (response) {
        setEmployees(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () { });
  };

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleSortByName() {
    // sort array ascending or descending by first name
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a > b ? 1 : -1)));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a > b ? -1 : 1)));
      setSorted(false);
    }
  }

  const filteredEmployees = data.filter((employee) =>
    employee.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  return (
    <Fragment>
      <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
      <p className="mb-16 text-md">Search for an employee or sort by Name.</p>
      <Navigation
        onSearch={handleSearchTerm}
        searchTerm={searchTerm}
        handleSortByName={handleSortByName}
      />
      <EmployeeCardList data={filteredEmployees} />
    </Fragment>
  );
}

export default Home;
