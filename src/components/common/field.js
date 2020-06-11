// Generic Field components that can be reused

import React from "react";
import PropTypes from "prop-types";

export function Input({
  label,
  name,
  type,
  value,
  onChange,
  form = { errors: {} },
}) {
  const { status, errors } = form;
  const isError = !status;
  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <input
        className={isError && errors[name] && "error"}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {isError && <span className="error-msg">{errors[name]}</span>}
    </fieldset>
  );
}

export function Select({ label, name, value, data, onChange }) {
  const options = data.map((name, i) => (
    <option value={i + 1} key={i}>
      {name}
    </option>
  ));
  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <select id={name} onChange={onChange} value={value}>
        {options}
      </select>
    </fieldset>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
