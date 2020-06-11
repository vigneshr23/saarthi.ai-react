/*
 * Employee Form component, which will be rendered with the portal i.e Modal comp.
 * component state is managed using hooks to control form fields
 */

import React, { useState } from "react";
import { Input, Select } from "../common/field";
import Button, { SubmitButton, CancelButton } from "../common/Buttons";

function EmployeeForm({ addEmployee, handleHide }) {
  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [dept, setDept] = useState(1);
  const [emailId, setEmailId] = useState("");
  const [doj, setDoj] = useState("");
  const [form, setError] = useState({ status: false, errors: {} });

  const validate = () => {
    let valid = true;
    let errors = {};
    if (empName.trim() == "") {
      valid = false;
      errors.empName = "Name can not be empty";
    }

    if (empId.trim() == "") {
      valid = false;
      errors.empId = "Employee ID can not be empty";
    }
    if (emailId.trim() == "") {
      valid = false;
      errors.emailId = "Email is not correct";
    }
    if (doj.trim() == "") {
      valid = false;
      errors.doj = "Date of joining can not be empty";
    }
    setError({
      status: valid,
      errors,
    });
    return valid;
  };

  const onsubmit = () => {
    if (validate()) {
      //submit form
      console.log("form valid");
      addEmployee({ empName, empId, dept, emailId, doj });
      handleHide();
    }
  };

  console.log(form);
  return (
    <div className="employeeform">
      <div className="form">
        <Input
          label={"Name"}
          type="text"
          onChange={(e) => setEmpName(e.target.value)}
          value={empName}
          name="empName"
          form={form}
        />
        <Input
          label={"Employee ID"}
          type="text"
          onChange={(e) => setEmpId(e.target.value)}
          value={empId}
          name="empId"
          form={form}
        />
        <Select
          label="Department"
          onChange={(e) => setDept(e.target.value)}
          value={dept}
          name="dept"
          data={["Technology", "Sales", "Marketing", "HR", "Operations"]}
        />
        <Input
          label="Email Id"
          type="email"
          onChange={(e) => setEmailId(e.target.value)}
          value={emailId}
          name="emailId"
          form={form}
        />
        <Input
          label="Date of Joining"
          type="date"
          onChange={(e) => setDoj(e.target.value)}
          value={doj}
          name="doj"
          form={form}
        />
      </div>
      <div className="form__actions">
        <SubmitButton
          btnClass="btn-primary"
          size={20}
          title="Submit Form"
          onClick={onsubmit}
        />
        <CancelButton
          btnClass="btn-danger"
          size={20}
          title="Clear Form"
          onClick={handleHide}
        />
      </div>
    </div>
  );
}
export default EmployeeForm;
