import React from "react";
import { Remove } from "../common/Buttons";
import { departments } from "../../data";

function EmployeeTable({ employees, onRemove }) {
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this employee?"))
      onRemove(id);
  };

  const renderRows = () => {
    return employees.map(({ empName, empId, dept, emailId, doj }, index) => (
      <tr key={index}>
        <th scope="row">{empId}</th>
        <td>{empName}</td>
        <td>{departments[dept - 1]}</td>
        <td>{doj}</td>
        <td>{emailId}</td>
        <td>
          <Remove
            onClick={() => handleRemove(empId)}
            title="Remove Employee"
            size={20}
          />
        </td>
      </tr>
    ));
  };

  return (
    <div className="floating-table">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Department</th>
            <th scope="col">Date of Join</th>
            <th scope="col">Email ID</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
}
export default EmployeeTable;
