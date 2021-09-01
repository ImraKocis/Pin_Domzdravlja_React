import React, { useState, useEffect } from 'react'

export default function Zupanije() {
  const [zupanije, setZupanije] = useState()
  useEffect(() => {
    fetch(
      'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/zupanije/read.php',
      {
        method: 'GET',
        headers: 'Content-Type application/json',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setZupanije(data)
      })
  }, [])
}
