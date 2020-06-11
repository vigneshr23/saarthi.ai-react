/*
 * Main Employee component that defines the functionality for Adding a new Employee / Deleting an employee from the table
*/

import React, { useState } from "react";
import Modal from "../common/modal";
import EmployeeForm from "./employee-form";
import EmployeeTable from "./employee-table";
import { data as sampleEmployees } from "../../data";

function Employee(props) {
  const [employees, setEmployees] = useState(sampleEmployees);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const removeEmployee = (id) => {
    let employeeList = [...employees];
    const newEmployeeList = employeeList.filter((emp) => emp.empId !== id);
    setEmployees(newEmployeeList);
  };
  return (
    <div className="container">
      <Modal
        title="Add a new employee"
        display={(hide) => (
          <EmployeeForm handleHide={hide} addEmployee={addEmployee} />
        )}
      >
        Add Employee
      </Modal>
      <div style={{ marginTop: "2rem" }}>
        List of employees <br />
        <EmployeeTable onRemove={removeEmployee} employees={employees} />
      </div>
    </div>
  );
}

export default Employee;
