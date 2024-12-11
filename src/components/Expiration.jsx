import React, { useEffect, useState } from "react";

const Expiration = ({ cardFlipper, stateUpdate, setFocusedElements }) => {
  const months = Array.from({ length: 12 }, (_, index) =>
    String(index + 1).padStart(2, "0")
  );
  const years = Array.from({ length: 14 }, (_, index) => 2024 + index);
  const [isFocused, setIsFocused] = useState([false, false]);
  const [cvv, setCvv] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  useEffect(() => {
    stateUpdate({
      month: selectedMonth ? selectedMonth : null,
      year: selectedYear ? selectedYear : null,
      cvv: cvv,
    });
  }, [selectedMonth, selectedYear, cvv]);
  return (
    <div className="w-full mb-[40px]">
      <div className="flex gap-[35px]">
        <div className="flex-1 w-full">
          <div className="w-full">
            <p className="mb-[5px] text-[14px] text-gray-300 font-medium">
              Expiration Date
            </p>
            <div className="flex gap-[15px]">
              <div className="flex-1 relative">
                <div className="absolute top-2/4 -translate-y-2/4 right-[10px]">
                  <svg
                    height={15}
                    version="1.1"
                    className="transition-all"
                    fill={isFocused[0] ? "#6875F5" : "#9ca3af"}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 330 330"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                      />
                    </g>
                  </svg>
                </div>
                <select
                  name=""
                  id=""
                  className="select bg-transparent w-full text-[18px] outline-none text-gray-400 transition-all focus:border-[#6875F5] focus:text-[#6875F5] border-gray-600 border rounded-md px-[15px] py-[5px] h-[50px]"
                  onClick={() => setIsFocused([true, false])}
                  onBlur={() => {
                    setIsFocused([false, false]);
                    setFocusedElements([false, false, false, false]);
                  }}
                  onFocus={() =>
                    setFocusedElements([false, false, true, false])
                  }
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="" disabled>
                    Month
                  </option>
                  {months.map((month, i) => (
                    <option key={i} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 relative">
                <div className="absolute top-2/4 -translate-y-2/4 right-[10px]">
                  <svg
                    height={15}
                    version="1.1"
                    className="transition-all"
                    fill={isFocused[1] ? "#6875F5" : "#9ca3af"}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 330 330"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                      />
                    </g>
                  </svg>
                </div>
                <select
                  name=""
                  id=""
                  className="select bg-transparent w-full text-[18px] outline-none text-gray-400 transition-all focus:border-[#6875F5] focus:text-[#6875F5] border-gray-600 border rounded-md px-[15px] py-[5px] h-[50px]"
                  onClick={() => setIsFocused([false, true])}
                  onBlur={() => {
                    setIsFocused([false, false]);
                    setFocusedElements([false, false, false, false]);
                  }}
                  onFocus={() =>
                    setFocusedElements([false, false, true, false])
                  }
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="" disabled>
                    Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={String(year).slice(2)}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-[5px] text-[14px] text-gray-300 font-medium">CVV</p>
          <input
            type="text"
            placeholder="123"
            onFocus={() => {
              cardFlipper(true);
              setFocusedElements([false, false, false, true]);
            }}
            onBlur={() => {
              cardFlipper(false);
              setFocusedElements([false, false, false, false]);
            }}
            maxLength={3}
            value={cvv}
            onChange={(e) => {
              const rawValue = e.target.value.replace(/\s/g, "");
              const validValue = rawValue.replace(/\D/g, "");
              setCvv(validValue);
            }}
            className="w-[150px] focus:border-[#6875F5] transition-all focus:text-[#6875F5] text-gray-400 bg-transparent border border-gray-600 outline-none rounded-md px-[15px] py-[5px] text-[18px] h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Expiration;
