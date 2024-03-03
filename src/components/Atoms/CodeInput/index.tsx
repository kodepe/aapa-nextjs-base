import styles from "./style.module.css";
import React, { useState, useRef, HTMLInputTypeAttribute } from "react";

type InputModeType =
  | "none"
  | "text"
  | "tel"
  | "url"
  | "email"
  | "numeric"
  | "decimal"
  | "search"
  | undefined;

interface CodeInputProps {
  length?: number;
  value?: string;
  keyboardType?: HTMLInputTypeAttribute;
  inputMode?: InputModeType;
  onTextChange?: any;
}

export const CodeInput = ({
  value,
  keyboardType,
  onTextChange,
  length = 6,
  inputMode,
}: CodeInputProps) => {
  const [code, setCode] = useState(new Array(length).fill(""));
  const inputRefs = useRef<any>([]);

  const handleChange = (e: any, index: number) => {
    const value = e.target.value;
    if (value.length > 1) return; // Limitar la longitud del input a 1 caracter
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    onTextChange(newCode.join(""));

    if (value !== "" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      // Retroceder al input anterior al borrar si es que el input actual está vacío
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="m-4">
      {code.map((value, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type={keyboardType}
          inputMode={inputMode}
          value={value}
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`${styles.inputPasswordStyle} bg-light`}
        />
      ))}
    </div>
  );
};

export default CodeInput;
