import { React, useState, useCallback } from 'react'

function GetAllData(ordinacije, gradovi, djelatnosti) {
  var brOrdinacija = 0
  var dataObj = [] // cijeli
  var djelatnostiObj = {}
  var gradoviArr = []
  djelatnosti.forEach((djelatnost) => {
    djelatnostiObj = {
      id_djelatnost: djelatnost.id,
      naziv_djelatnosti: djelatnost.naziv_djelatnosti,
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
      gradoviArr.push({ name: grad.grad_naziv, value: brOrdinacija })
    })
    dataObj.push(djelatnostiObj, gradoviObj)
    djelatnostiObj = {}
    gradoviObj = []
  })
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
