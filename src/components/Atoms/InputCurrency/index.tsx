"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { FormatCurrencyTwoDecimals } from "@/utils/currency";
import Image from "next/image";
import Select from "react-select";

interface DataProps {
  icon: string;
  value: string;
  label: string;
}

interface InputCurrencyProps {
  label?: React.ReactNode;
  caption?: React.ReactNode;
  rightIcon?: React.ReactNode;
  visible?: boolean;
  data?: DataProps[];
  selectValue?: any;
  onChangevalue?: any;
  onChangeCurrency?: any;
  value: string;
}

export const InputCurrency = ({
  label,
  caption,
  rightIcon,
  visible = false,
  data = [],
  selectValue,
  onChangeCurrency,
  onChangevalue,
  value,
}: InputCurrencyProps) => {
  const [blur, setBlur] = useState(false);
  const [focus, setFocus] = useState(false);
  const handleChange = (event: any) => {
    const rawValue = event.target.value;
    const numberValue = rawValue.replace(/[^\d.]/g, "");
    const formattedValue = FormatCurrencyTwoDecimals(numberValue);
    onChangevalue(formattedValue);
  };

  return (
    <div className={`${styles.container}`}>
      {label && <div>{label}</div>}
      <div className={`${styles.container}`}>
        <input
          onBlur={() => {
            setBlur(true);
            setFocus(false);
          }}
          onFocus={() => {
            setFocus(true);
            setBlur(false);
          }}
          className={`${styles.inputCurrencyContainer} ${
            focus
              ? styles.onFocus
              : blur && value.length > 0
              ? styles.onBlur
              : ""
          }`}
          type="text"
          value={value}
          onChange={handleChange}
        />
        {!visible && rightIcon && (
          <div className={`${styles.rightIcon}`}>{rightIcon}</div>
        )}
        {visible && (
          <div className={`${styles.selectContainer}`}>
            {data.length > 0 && (
              <Select
                isSearchable={false}
                placeholder=""
                value={selectValue}
                options={data}
                onChange={(value) => {
                  onChangeCurrency(value);
                }}
                styles={{
                  container(base, props) {
                    return {
                      ...base,
                      backgroundColor: "transparent",
                      maxHeight: 38,
                      marginTop: 1,
                      marginRight: 1,
                    };
                  },
                  control(base, state) {
                    return {
                      ...base,
                      border: "none", // Borde solo si no está enfocado
                      boxShadow: "none", // Sombra solo si está enfocado
                      "&:hover": {
                        border: "none", // Borde al pasar el ratón solo si no está enfocado
                      },
                    };
                  },
                  indicatorSeparator: (base, state) => ({
                    ...base,
                    display: "none", // Oculta la línea separadora entre el valor y la flecha
                  }),
                  singleValue(base, props) {
                    return {
                      ...base,
                      backgroundColor: "#fff",
                    };
                  },
                  option(base, state) {
                    return {
                      ...base,
                      color: "#000",
                      cursor: "pointer",
                      margin: 0,
                      backgroundColor: state.isFocused
                        ? "#f0f0f0"
                        : "transparent",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                        cursor: "pointer",
                      },
                      height: 45,
                      minWidth: 40,
                    };
                  },
                  menu(base, props) {
                    return {
                      ...base,
                      minWidth: 110,
                      right: 0,
                    };
                  },
                  valueContainer(base, props) {
                    return {
                      height: 35,
                      alignItems: "center",
                      display: "flex",
                      margin: 0,
                      padding: 0,
                      flexDirection: "row",
                      minWidth: 40,
                    };
                  },
                }}
                components={{
                  Option: ({ data, selectOption, setValue }) => (
                    <div
                      className="flex flex-row cursor-pointer min-h-[40px] py-1 hover:bg-primary hover:text-light"
                      onClick={() => {
                        setValue(data, onChangeCurrency);
                      }}
                    >
                      <Image
                        className="mr-2"
                        src={data.icon}
                        alt={data.label}
                        width={40}
                        height={40}
                      />
                      {data.label}
                    </div>
                  ),
                  SingleValue: ({ data, ...props }) => (
                    <div className="flex flex-row min-w-[50px]">
                      <Image
                        className="mr-2"
                        src={data.icon}
                        alt={data.label}
                        width={40}
                        height={40}
                      />
                      {/* {data.label} */}
                    </div>
                  ),
                }}
              />
            )}
          </div>
        )}
      </div>
      {caption && <div>{caption}</div>}
    </div>
  );
};
