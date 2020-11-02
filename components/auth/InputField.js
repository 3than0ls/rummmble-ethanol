/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  label, type, name, register, errors,
}) => {
  const id = `input${name.charAt(0).toUpperCase() + name.slice(1)}`;

  const error = () => {
    let message;
    if (errors[name]) {
      message = errors[name].message;
    }
    if (type === 'password') {
      if (errors.confirmPassword && errors.confirmPassword.type === 'validate') {
        message = 'Passwords must match';
      }
    }
    return <p className="text-red-700 mt-2">{message}</p>;
  };

  return (
    <div className="mb-8 w-1/3">
      <label htmlFor={id} className="text-black text-center tracking-wide text-lg mb-3">
        <span className="font-bold">{label}</span>
        <input
          type={type}
          name={name}
          id={id}
          ref={register}
          autoComplete="off"
          autoCorrect="off"
          className="w-full text-center bg-transparent pb-1 border-b border-gray-500 text-gray-700 leading-tight focus:outline-none"
        />
        {error()}
      </label>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default InputField;
