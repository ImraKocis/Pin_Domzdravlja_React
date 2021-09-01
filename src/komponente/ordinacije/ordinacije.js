import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

import './ordinacije.css'

const url_ordinacije =
  'http://127.0.0.1/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/ordinacije/read.php'
const url_gradovi =
  'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/gradovi/read.php'
const url_zupanije =
  'http://127.0.0.1/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/zupanije/read.php'
const url_djelatnosti =
  'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/djelatnost/read.php'
const myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')
const requestOptions = {
  method: 'GET',
  heders: myHeaders,
}
const Ordinacije = () => {
  const [ordinacije, setOrdinacije] = useState([])
  const getOrdinacije = async () => {
    const res_ordinacija = await fetch(url_ordinacije, requestOptions)
    const ordinacija = await res_ordinacija.json()
    setOrdinacije(ordinacija)
    console.log(ordinacija)
  }
  const [zupanije, setZupanije] = useState([])
  const [zupanija, setZupanija] = useState('')
  const getZupanije = async () => {
    const res_zupanija = await fetch(url_zupanije, requestOptions)
    const zupanija = await res_zupanija.json()
    setZupanije(zupanija)
  }
  const [gradovi, setGradovi] = useState([])
  const [grad, setGrad] = useState('')
  const [gradSelectDisabled, setGradSelectDisabled] = useState(true)
  const getGradovi = async (id_zupanije) => {
    const res_grad = await fetch(url_gradovi, requestOptions)

    const grad = await res_grad.json()
    setGradovi(grad.filter((single) => single.id_zupanije == id_zupanije))
  }
  const [djelatnosti, setDjelatnosti] = useState([])
  const [djelatnost, setDjelatnost] = useState('')
  const getDjelatnosti = async () => {
    const res_djel = await fetch(url_djelatnosti, requestOptions)
    const djelatnost = await res_djel.json()
    setDjelatnosti(djelatnost)
  }

  const handleChange = (e) => {
    // setZupanija(e.target.value)
    // setGrad(e.target.value)
    // setDjelatnost(e.target.value)
  }
  const handleChangeZupanija = (id_zupanije) => {
    setZupanija(id_zupanije)
    getGradovi(id_zupanije)
    setGradSelectDisabled(false)
  }
  useEffect(() => {
    getOrdinacije()
    getZupanije()
    zupanije && getGradovi(1)
    getDjelatnosti()
  }, [])

  return (
    <>
      <FormControl className='select-group'>
        <InputLabel id='lbl-zupanija'></InputLabel>

        {zupanije && (
          <Select
            disableUnderline
            labelId='lbl-zupanija'
            id='zupanija'
            value={zupanija}
            onChange={(e) => handleChangeZupanija(e.target.value)}
          >
            {zupanije.map((zupanija) => {
              return (
                <MenuItem
                  key={zupanija.id_zupanije}
                  value={zupanija.id_zupanije}
                >
                  {zupanija.zupanija_naziv}
                </MenuItem>
              )
            })}
          </Select>
        )}
        <FormHelperText>Županija</FormHelperText>
      </FormControl>
      <FormControl className='select-group'>
        <InputLabel id='lbl-grad'></InputLabel>
        {gradovi && (
          <Select
            disableUnderline
            disabled={gradSelectDisabled}
            labelId='lbl-grad'
            id='grad'
            value={grad}
            onChange={(e) => setGrad(e.target.value)}
          >
            {gradovi.map((grad) => {
              return (
                <MenuItem key={grad.id_grada} value={grad.id_grada}>
                  {grad.grad_naziv}
                </MenuItem>
              )
            })}
          </Select>
        )}
        <FormHelperText>Grad</FormHelperText>
      </FormControl>
      <FormControl className='select-group'>
        <InputLabel id='lbl-djelatnost'></InputLabel>
        <Select
          disableUnderline
          labelId='lbl-djelatnost'
          id='djelatnost'
          value={djelatnost}
          onChange={(e) => setDjelatnost(e.target.value)}
        >
          {djelatnosti.map((djelatnost) => {
            return (
              <MenuItem key={djelatnost.id} value={djelatnost.id}>
                {djelatnost.naziv_djelatnosti}
              </MenuItem>
            )
          })}
        </Select>
        <FormHelperText>Djelatnost</FormHelperText>
      </FormControl>
    </>
  )
}

export default Ordinacije
