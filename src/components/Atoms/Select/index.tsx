import React from "react";
import Select from "react-select";

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: state.isFocused ? "2px solid #007bff" : "1px solid #ced4da",
    borderRadius: "4px",
    transition: "border-color 0.3s ease",
    boxShadow: state.isFocused ? "0 0 0 0.2rem rgba(0,123,255,.25)" : "none",
    "&:hover": {
      borderColor: state.isFocused ? "#007bff" : "#adb5bd",
    },
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    position: "absolute",
    top: state.selectProps.hasValue ? "-10px" : "50%",
    transform: state.selectProps.hasValue
      ? "translateY(0)"
      : "translateY(-50%)",
    fontSize: state.selectProps.hasValue ? "12px" : "16px",
    color: state.selectProps.hasValue ? "#6c757d" : "#495057",
    transition:
      "top 0.3s ease, transform 0.3s ease, font-size 0.3s ease, color 0.3s ease",
  }),
  indicatorSeparator: (base: any, state: any) => ({
    ...base,
    display: "none",
  }),
};

interface SelectProps {
  options: any[];
  value: any;
  onChange: any;
  placeholder: string;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
}: SelectProps) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      styles={customStyles}
      hasValue={!!value}
    />
  );
};
