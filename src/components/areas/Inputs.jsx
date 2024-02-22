import React, { useState, useEffect } from 'react';

function Inputs({ placeholder }) {
  const [inpType, setType] = useState("text");

  useEffect(() => {
    const typeInput = (ph) => {
      switch (ph) {
        case "Password":
          return "password";
        case "Phone number":
          return "number";
        default:
          return "text";
      }
    };
    setType(typeInput(placeholder));
  }, [placeholder]);

  return (
    <input
      type={inpType}
      placeholder={placeholder}
      className="w-[542px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex"
    />
  );
}

export default Inputs;