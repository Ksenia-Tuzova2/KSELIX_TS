import { useState } from "react";
import React, { useEffect } from 'react'

export const Time: React.FC = () => {


  let [clock, setClock] = useState(new Date)

  useEffect(() => {
    setInterval(() => setClock(new Date), 1000)

  }, [])

  function letNull(number: number) {
    if (number < 10) {
      return '0' + number
    } else return number
  }

 

  return (

    <>{letNull(clock.getHours())}:{letNull(clock.getMinutes())}:{letNull(clock.getSeconds())}</>
  );
};

