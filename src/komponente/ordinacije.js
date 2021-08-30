import React, { useState, useEffect } from 'react'
const url =
  'http://127.0.0.1/Pin_Domzdravlja_1.0/domzdravlja/php/ordinacije.php'
const Ordinacije = () => {
  const [ordinacije, setOrdinacije] = useState([])
  const getOrdinacije = async () => {
    const res = await fetch(url)
    const ordinacije = await res.json()
    setOrdinacije(ordinacije)
    //console.log(ordinacije)
  }

  useEffect(() => {
    getOrdinacije()
  }, [])
  return (
    <>
      <h1>pero</h1>
    </>
  )
}

export default Ordinacije
