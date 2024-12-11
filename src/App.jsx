import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import Expiration from "./components/Expiration";
import "./App.css";
import CardImage from "./assets/card.jpeg";
import SimImage from "./assets/sim.png";
import VisaCard from "./assets/visa-card.png";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { motion } from "framer-motion";
import { g, u } from "framer-motion/client";
const App = () => {
  const [flipped, setFlipped] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const paddedCardNumber = (cardNumber + "8".repeat(16)).slice(0, 16);
  const cardChunks = paddedCardNumber.match(/.{1,4}/g);
  const [cardHolderName, setCardHolderName] = useState("FULL NAME");
  const [expire, setExpire] = useState({
    month: null,
    year: null,
    cvv: null,
  });
  const paddedCVVNumber = Number((expire.cvv + "000").slice(0, 3));
  const cardNumberStyle = {
    width: "345px",
    height: "56px",
    marginTop: "108px",
    marginLeft: "10px",
  };
  const cardHolderStyle = {
    width: "260px",
    height: "64px",
    marginTop: "181px",
    marginLeft: "10px",
  };
  const cardExpireStyle = {
    width: "80px",
    height: "64px",
    marginTop: "181px",
    marginLeft: "340px",
  };
  const cardCVVStyle = {
    width: "80px",
    height: "64px",
    marginTop: "97px",
    marginLeft: "340px",
  };
  const defaultStyle = {
    width: 0,
    height: 0,
    marginTop: 0,
    marginLeft: 0,
    border: "none",
  };
  const [focusedElements, setFocusedElements] = useState([
    false,
    false,
    false,
    false,
  ]);
  let [focusElementStyle, setFocusElementStyle] = useState(defaultStyle);
  useEffect(() => {
    if (focusedElements[0] === true) {
      setFocusElementStyle(cardNumberStyle);
    } else if (focusedElements[1] === true) {
      setFocusElementStyle(cardHolderStyle);
    } else if (focusedElements[2] === true) {
      setFocusElementStyle(cardExpireStyle);
    } else if (focusedElements[3] === true) {
      setFocusElementStyle(cardCVVStyle);
    } else {
      setFocusElementStyle(defaultStyle);
    }
  }, [focusedElements]);
  return (
    <div className=" text-blue-500  antialiased h-screen bg-primary flex items-center justify-center">
      <p className=" absolute bottom-[2px] right-2 text-[14px] text-gray-400 font-medium">
        Design and Developed by{" "}
        <a
          className=" after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[#6875F5] after:h-[1px] after:w-0 hover:after:w-full after:transition-all relative"
          href="https://abdullah-al-mridul-dev.vercel.app/"
          target="_blank"
        >
          Abdullah{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={13}
            height={12}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link inline-block"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </a>
      </p>
      <div className=" p-9 h-[570px] ring-1 relative ring-gray-700 ring-inset pt-[180px] rounded-lg min-w-[557px] bg-secondary">
        <div className="absolute top-0 left-0 -translate-y-2/4 ml-[50%] -translate-x-2/4">
          <div className="card-container">
            <div className={`card ${flipped ? "flipped" : ""}`}>
              <div className="card-front">
                <div className=" absolute top-0 z-[-1] object-cover ">
                  <img
                    className=" rounded-[18px] brightness-50"
                    src={CardImage}
                    alt="card-image"
                  />
                </div>
                <div
                  style={focusElementStyle}
                  className=" z-[1] bg-transparent transition-all border-gray-400 relative rounded-md border ml-0 mt-0 after:bg-[#08142f] after:opacity-50 after:blur-xl after:h-full after:absolute after:w-full after:content-[''] w-[100px] h-[100px]"
                ></div>
                <div className=" z-10 absolute top-0 p-7 flex justify-between w-full flex-col h-full">
                  <div className="flex justify-between w-full items-center">
                    <div>
                      <img
                        className=" h-[50px]"
                        src={SimImage}
                        alt="sim-image"
                      />
                    </div>
                    <div>
                      <img
                        className=" h-[45px]"
                        src={VisaCard}
                        alt="sim-image"
                      />
                    </div>
                  </div>
                  <div>
                    <NumberFlowGroup>
                      <div className="flex items-center gap-6 font-semibold">
                        <NumberFlow
                          value={cardChunks[0] || 8888}
                          animationDuration={0.4}
                          format={{ useGrouping: false }}
                          willChange
                          className=" text-[27px] tracking-wider text-gray-200 font-medium"
                        />
                        <NumberFlow
                          value={cardChunks[1] || 8888}
                          animationDuration={0.4}
                          format={{ useGrouping: false }}
                          willChange
                          className=" text-[27px] tracking-wider text-gray-200 font-medium"
                        />
                        <NumberFlow
                          value={cardChunks[2] || 8888}
                          animationDuration={0.4}
                          format={{ useGrouping: false }}
                          willChange
                          className=" text-[27px] tracking-wider text-gray-200 font-medium"
                        />
                        <NumberFlow
                          value={cardChunks[3] || 8888}
                          animationDuration={0.4}
                          format={{ useGrouping: false }}
                          willChange
                          className=" text-[27px] tracking-wider text-gray-200 font-medium"
                        />
                      </div>
                    </NumberFlowGroup>
                  </div>
                  <div className=" flex justify-between">
                    <div>
                      <p
                        className="text-[13px] leading-[13px] text-gray-300 font-medium"
                        style={{
                          textShadow: "#0e2a5acc 7px 6px 10px",
                        }}
                      >
                        Card Holder
                      </p>
                      {cardHolderName.split("").map((char, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            delay: 0.2,
                          }}
                          className=" text-[18px] tracking-wide inline-block mt-[6px] text-gray-200 font-medium uppercase leading-[18px]"
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </div>
                    <div>
                      <p
                        className="text-[13px] leading-[13px] text-gray-300 font-medium"
                        style={{
                          textShadow: "#0e2a5acc 7px 6px 10px",
                        }}
                      >
                        Expires
                      </p>
                      <p
                        style={{
                          textShadow: "#0e2a5acc 7px 6px 10px",
                        }}
                        className=" text-[18px] tracking-wider mt-[6px] text-gray-200 font-medium uppercase leading-[18px]"
                      >
                        <NumberFlow
                          value={expire.month || 12}
                          animationDuration={0.4}
                          format={{ useGrouping: false }}
                          willChange
                          className="  tracking-wider text-gray-200 font-medium"
                        />
                        /
                        <NumberFlow
                          value={expire.year || 24}
                          animationDuration={0.4}
                          format={{ useGrouping: false }}
                          willChange
                          className="  tracking-wider text-gray-200 font-medium"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-back relative">
                <div
                  style={focusElementStyle}
                  className=" z-[1] absolute bg-transparent transition-all border-gray-400 top-0 left-0 rounded-md border ml-0 mt-0  w-[100px] h-[100px]"
                >
                  <div className=" w-full h-full after:bg-[#08142f] opacity-50 after:content-[''] after:w-[80px] after:h-[64px] after:inline-block after:blur-xl"></div>
                </div>

                <div className=" absolute top-0 z-[-1] object-cover ">
                  <img
                    className=" rounded-[18px] brightness-50"
                    src={CardImage}
                    alt="card-image"
                  />
                </div>
                <div className=" z-10">
                  <div className=" bg-[#000013cc] leading-[16px] w-full h-[50px] mt-8"></div>
                  <div className=" flex mt-6 pr-7">
                    <div className=" flex-1"></div>
                    <div className=" flex-1">
                      <p
                        className="text-[13px] leading-[13px] text-right text-gray-300 font-medium"
                        style={{
                          textShadow: "#0e2a5acc 7px 6px 10px",
                        }}
                      >
                        CVV
                      </p>
                      <div className=" text-right">
                        <NumberFlow
                          value={paddedCVVNumber || 123}
                          animationDuration={0.4}
                          format={{ useGrouping: false }}
                          willChange
                          className=" text-[27px] tracking-wider text-gray-200 font-medium"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        className=" h-[45px] mt-6 mr-6 ml-auto brightness-75"
                        src={VisaCard}
                        alt="sim-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Input
          label="Card Number"
          number
          setCardNumber={setCardNumber}
          cardNumber={cardNumber}
          setFocusedElements={setFocusedElements}
          onFocus={() => setFocusedElements([true, false, false, false])}
          onBlur={() => setFocusedElements([false, false, false, false])}
        />
        <Input
          setCardHolderName={setCardHolderName}
          cardHolderName={cardHolderName}
          label="Card Holder"
          onFocus={() => setFocusedElements([false, true, false, false])}
          onBlur={() => setFocusedElements([false, false, false, false])}
        />
        <Expiration
          setFocusedElements={setFocusedElements}
          stateUpdate={setExpire}
          cardFlipper={setFlipped}
        />
        <button className=" bg-[#111827] rounded-md py-[5px] h-[50px] font-medium text-gray-400 hover:bg-[#6875F5] transition-all hover:text-gray-900 text-[18px] w-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
