import React from "react";
import "./Input.css";

const Input = props => {
  const {
    placeholder,
    label,
    labelHelper,
    type = "text",
    name,
    inputHelper,
  } = props;
  return (
    <div className="mb-5 w-full">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        {label}
        {labelHelper && (
          <span className="ml-1 text-gray-400">({labelHelper})</span>
        )}
      </label>
      {type === "text" ? (
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          required
          className=" bg-white border placeholder-gray-400 border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 "
        />
      ) : (
        <div className="relative w-full">
          <div className="flex items-stretch w-full mb-4 relative">
            <div className="flex -mr-px">
              <span className="flex items-center leading-normal bg-[#f8f9fc] rounded-md rounded-r-none border border-r-0 px-3 whitespace-no-wrap text-gray-400 font-medium text-sm">
                {inputHelper}
              </span>
            </div>
            <input
              type="text"
              required
              id={name}
              name={name}
              placeholder={placeholder}
              className="flex-grow bg-white border placeholder-gray-400 border-gray-300 text-gray-900 text-sm rounded-tr-md rounded-br-md  p-2.5 p-r-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Input
