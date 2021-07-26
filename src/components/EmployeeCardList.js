import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList ({ data }) {
    return (
        data.map((employee, index) => (
            <EmployeeCard
                key={index}
                name={employee}
            />
            ))
    )
}

export default EmployeeCardList;