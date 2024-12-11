import React, { useState } from "react";

const Input = ({
  label = "",
  number,
  setCardNumber,
  setCardHolderName,
  onFocus,
  onBlur,
}) => {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/\s/g, "");
    const validValue = rawValue.replace(/\D/g, "");
    const formattedValue = validValue.replace(/(\d{4})(?=\d)/g, "$1  ");
    setValue(formattedValue);
    setCardNumber(validValue);
  };

  return (
    <div className=" mb-5">
      <p className=" mb-[5px] text-[14px] text-gray-300 font-medium">{label}</p>
      <input
        value={value}
        type="text"
        onChange={
          number
            ? (e) => handleInputChange(e)
            : (e) => {
                setValue(e.target.value);
                if (e.target.value === "") setCardHolderName("Full Name");
                else setCardHolderName(e.target.value);
              }
        }
        placeholder={number ? "0000  0000  0000  0000" : "John Doe"}
        maxLength={22}
        onFocus={onFocus}
        onBlur={onBlur}
        className=" w-full tracking-wider bg-transparent transition-all text-gray-400 focus:text-[#6875F5] focus:outline-[#6875F5] outline outline-gray-600 outline-1 rounded-md px-[15px] py-[5px] text-[18px] h-12"
      />
    </div>
  );
};

export default Input;
