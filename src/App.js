import React, { useState, useCallback } from "react";
// import "./styles.css";

/* Instructions 
Currently when a user clicks on inc and dec the unnecessary functions are called there by performance is getting effected. See if you can fix the uncessary function calls 
*/
const functionsCounter = new Set();

const howManyFunctionCalled = (increment, decrement, incrementOtherCounter) => {
  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);
  console.log(functionsCounter.size);
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(counter + 1);
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
    console.log("Inc");
  }, []);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
    console.log("Dec");
  }, []);

  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter - 1);
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
    console.log("Inc");
  }, [otherCounter]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
    <div className="w-[95%] h-[90%] rounded-lg border-2 flex overflow-hidden">
    <div className="w-[30%] h-full bg-[#3cb29c] flex justify-center items-center">
    <div className="w-[90%] relative h-[95%] flex justify-center items-center">
    <p className="absolute top-0 left-0 text-white text-lg">Diprella</p>
    <div className="w-full h-1/3 flex flex-col justify-between items-center">
    <h1 className="text-white font-bold text-4xl">Welcome Back!</h1>
    <p className="text-white text-center w-[70%]">To Keep Connected With us please login with your personal info</p>
    <button className="text-white border-2 border-white rounded-full px-16 py-3">SIGN IN</button>
    </div>

    </div>
    </div>
    <div className="w-[70%] h-full flex justify-center items-center">
      <div className="w-full h-2/3 flex flex-col justify-between items-center">
        <h2 className="text-[#3cb29c] font-semibold text-4xl">Create Account</h2>
        <div className="flex w-full items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 mx-1 border-black flex justify-center items-center">
            <p className="text-xl font-semibold">f</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 mx-1 border-black flex justify-center items-center">
            <p className="text-xl font-semibold">G+</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 mx-1 border-black flex justify-center items-center">
            <p className="text-xl font-semibold">In</p>
          </div>
        </div>
        <h2 className="font-semibold text-lg">or use your email for registration</h2>
        <form className="w-1/3">
        <div className="w-full py-2 my-1 bg-slate-200 rounded-md">

          <input type="text" className="w-full h-full bg-slate-200 px-2" placeholder="Name"></input>
        </div>
        <div className="w-full py-2 my-1 bg-slate-200 rounded-md">
          <input type="text" className="w-full h-full bg-slate-200" placeholder="Email"></input>
        </div>
        <div className="w-full py-2 my-1 bg-slate-200 rounded-md">
          <input type="text" className="w-full h-full bg-slate-200" placeholder="Password"></input>
        </div></form>
      </div>
    </div>
    </div>
    </div>
  );
}
