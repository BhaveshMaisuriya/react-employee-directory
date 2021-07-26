import React, { Fragment } from "react";
import Employee from "../assets/images/employee.png";

function EmployeeCard({ name }) {
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
