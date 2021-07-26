import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList ({ data }) { // another fancy destructuring to avoid typing props.data.map down below
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