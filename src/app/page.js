"use client"

import Header from "@/components/Header";
import Investment from "@/components/Investment";
import Table from "@/components/Table";
import { useState } from "react";

const Home = () => {

  const [userInput, setUserInput] = useState({
    initialInvestment: "10000",
    annualInvestment: "1200",
    expectedReturn: "6",
    duration: "10"
  })

  const handleChange = (inputIdentifier, inputValue) => {
    // userInput, ...userInput yapmistim ilkte sonradan prevUserInput'a cevirdim 
      setUserInput((prevUserInput) => {
        return{
          ...prevUserInput, [inputIdentifier]:  +inputValue
        }
      })
    }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col h-full w-[1240px]">
        <Header />
        <Investment userInputObject={userInput} onChange={handleChange}/>
        <Table userInput={userInput} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Home;
