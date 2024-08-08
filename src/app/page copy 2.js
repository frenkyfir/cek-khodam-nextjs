"use client";
import Image from "next/image";
import React from "react";

export default function Home() {

  const [counter , setCounter ] = React.useState(0);
  
  function plusCounter(){
    setCounter(counter+1)
  }
  function minsCounter(){
    setCounter(counter-1)
  }

  function resetCounter(){
    setCounter(0)
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl mb-5">Simple Counter</h1>
      <div className="flex items-center">
        <button onClick={minsCounter} className="ml-5 mr-5 text-xl ">
          -
        </button>
        <span className="text-xl">{counter}</span>
        <button onClick={plusCounter} className="ml-5 mr-5 text-xl">
          +
        </button>
      </div>
      <div className="mt-10">
        <button onClick={resetCounter} className="bg-blue-500 text-white px-4 py-2 rounded">
          Reset Counter
        </button>
      </div>
    </div>
    </>
  );
}
