import React, { useState, useEffect } from 'react'
const url = 'http://127.0.0.1/Pin_Domzdravlja_1.0/domzdravlja/php/osoblje.php'
const Osoblje = () => {
  const [osoblje, setOsoblje] = useState([])
  const getOsoblje = async () => {
    const res = await fetch(url)
    const osoblje = await res.json()
    setOsoblje(osoblje)
    console.log(osoblje)
  }

  useEffect(() => {
    getOsoblje()
  }, [])
  return (
    <>
      <h1>osoblje</h1>
    </>
  )
}

export default Osoblje
