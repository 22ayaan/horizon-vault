"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        decimals={2}
        duration={1}
        end={amount}
        prefix="$"
        className="text-blue-800"
      />
    </div>
  );
};

export default AnimatedCounter;
