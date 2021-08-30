import React, { useState, useEffect } from 'react'
const url = 'http://127.0.0.1/Pin_Domzdravlja_1.0/domzdravlja/php/zupanije.php'
const Zupanije = () => {
  const [zupanije, setZupanije] = useState([])
  const getZupanije = async () => {
    const res = await fetch(url)
    const zupanije = await res.json()
    setZupanije(zupanije)
    //console.log(zupanije)
  }

  useEffect(() => {
    getZupanije()
  }, [])
  return <>{zupanije.map((zupanija) => {})}</>
}

export default Zupanije
