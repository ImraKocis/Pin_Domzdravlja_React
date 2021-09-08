import { React, useState, useCallback } from 'react'

const GetAllData = (ordinacije, gradovi, djelatnosti) => {
  var brOrdinacija = 0
  var dataObj = [] // cijeli
  var djelatnostiObj = {}
  var gradoviArr = []
  djelatnosti.forEach((djelatnost) => {
    djelatnostiObj = {
      id_djelatnost: djelatnost.id,
      naziv_djelatnosti: djelatnost.naziv_djelatnosti,
      array_gradovi: [],
    }
    gradovi.forEach((grad) => {
      brOrdinacija = 0
      ordinacije.forEach((ordinacija) => {
        if (ordinacija.id_djelatnost == djelatnost.id) {
          if (ordinacija.id_grada == grad.id_grada) {
            brOrdinacija++
          }
        }
      })
      djelatnostiObj['array_gradovi'].push({
        name: grad.grad_naziv,
        value: brOrdinacija,
      })
    })
    //djelatnostiObj['array_gradovi'].push(gradoviArr)
    dataObj.push(djelatnostiObj)
    djelatnostiObj = {}
    gradoviArr = []
  })
  console.log(dataObj)
  return dataObj
}

// const getDataOOM = (ordinacijeData, gradData) => {
//   var brOrdinacija = 0
//   var dataObj = []
//   gradData.forEach((grad) => {
//     ordinacijeData.forEach((ordinacija) => {
//       if (ordinacija.id_djelatnost == 1) {
//         if (ordinacija.id_grada == grad.id_grada) {
//           brOrdinacija++
//         }
//       }
//     })
//     dataObj.push({ name: grad.grad_naziv, value: brOrdinacija })
//     brOrdinacija = 0
//   })
//   console.log(dataObj)
//   setOpcaOM(dataObj)
// }
// const getDataZZZ = (ordinacijeData, gradData) => {
//   var brOrdinacija = 0
//   var dataObj = []
//   gradData.forEach((grad) => {
//     brOrdinacija = 0
//     ordinacijeData.forEach((ordinacija) => {
//       if (ordinacija.id_djelatnost == 2) {
//         if (ordinacija.id_grada == grad.id_grada) {
//           brOrdinacija++
//         }
//       }
//     })
//     dataObj.push({ name: grad.grad_naziv, value: brOrdinacija })
//   })
//   setZdravstvenaZZ(dataObj)
// }

// const getDataS = (ordinacijeData, gradData) => {
//   var brOrdinacija = 0
//   var dataObj = []
//   gradData.forEach((grad) => {
//     brOrdinacija = 0
//     ordinacijeData.forEach((ordinacija) => {
//       if (ordinacija.id_djelatnost == 3) {
//         if (ordinacija.id_grada == grad.id_grada) {
//           brOrdinacija++
//         }
//       }
//     })
//     dataObj.push({ name: grad.grad_naziv, value: brOrdinacija })
//   })
//   //console.log(dataObj)
//   setStomatologija(dataObj)
// }

// const getDataP = (ordinacijeData, gradData) => {
//   var brOrdinacija = 0
//   var dataObj = []
//   gradData.forEach((grad) => {
//     brOrdinacija = 0
//     ordinacijeData.forEach((ordinacija) => {
//       if (ordinacija.id_djelatnost == 4) {
//         if (ordinacija.id_grada == grad.id_grada) {
//           brOrdinacija++
//         }
//       }
//     })
//     dataObj.push({ name: grad.grad_naziv, value: brOrdinacija })
//   })
//   //console.log(dataObj)
//   setPedijatrija(dataObj)
// }

export default function (props) {
  return <></>
}
