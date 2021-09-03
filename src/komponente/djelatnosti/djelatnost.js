import React, { useState, useEfect, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import './djelatnost.css'
const myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')
const requestOptions = {
  method: 'GET',
  heders: myHeaders,
}
const url_gradovi =
  'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/gradovi/read.php'
const url_osoblje =
  'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/osoblje/read.php'

const Djelatnost = () => {
  const [gradovi, setGradovi] = useState([])
  const [grad, setGrad] = useState('')
  const [osoblje, setOsoblje] = useState([])
  const [osobljeStatic, setOsobljeStatic] = useState([])
  const [isSelectActive, setIsSelectActive] = useState(false)
  const getGradovi = async () => {
    const res_grad = await fetch(url_gradovi, requestOptions)
    const grad = await res_grad.json()
    setGradovi(grad)
    //djelatnosti && console.log(djelatnosti)
  }

  const getOsoblje = async () => {
    const res = await fetch(url_osoblje)
    const osoblje = await res.json()
    setOsoblje(osoblje)
    setOsobljeStatic(osoblje)
    //osoblje && console.log(osoblje)
  }

  const hanldeChangeGrad = (grad) => {
    setGrad(grad)
    if (grad === 'all') {
      setIsSelectActive(false)
    } else {
      console.log(grad)
      setOsoblje(osobljeStatic.filter((data) => data.grad_naziv === grad))
      osoblje && setIsSelectActive(true)
    }
  }

  useEffect(() => {
    getGradovi()
    getOsoblje()
  }, [])

  return (
    <>
      <FormControl className='select'>
        <InputLabel id='lbl-djelatnost'></InputLabel>
        <Select
          disableUnderline
          labelId='lbl-djelatnost'
          id='djelatnost'
          value={grad}
          onChange={(e) => hanldeChangeGrad(e.target.value)}
        >
          <MenuItem value='all'>Prikazi sve</MenuItem>
          {gradovi.map((grad) => {
            return (
              <MenuItem key={grad.id_grada} value={grad.grad_naziv}>
                {grad.grad_naziv}
              </MenuItem>
            )
          })}
        </Select>
        <FormHelperText>Gradovi</FormHelperText>
      </FormControl>
      <div className='naslov-div'>
        <h2 className='naslov'>Pregled djelatnosti po gradu</h2>
      </div>
      <TableContainer className='table-djelatnosti' component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align='right'>Ime</TableCell>
              <TableCell align='right'>Prezime</TableCell>
              <TableCell align='right'>Ordinacija</TableCell>
              <TableCell align='right'>Tip</TableCell>
              <TableCell align='right'>Grad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {osobljeStatic && isSelectActive === false
              ? osobljeStatic.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component='th' scope='row'>
                      {row.id}
                    </TableCell>
                    <TableCell align='right'>{row.ime}</TableCell>
                    <TableCell align='right'>{row.prezime}</TableCell>
                    <TableCell align='right'>{row.naziv_ordinacije}</TableCell>
                    <TableCell align='right'>{row.naziv_tipa}</TableCell>
                    <TableCell align='right'>{row.grad_naziv}</TableCell>
                  </TableRow>
                ))
              : osoblje.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component='th' scope='row'>
                      {row.id}
                    </TableCell>
                    <TableCell align='right'>{row.ime}</TableCell>
                    <TableCell align='right'>{row.prezime}</TableCell>
                    <TableCell align='right'>{row.naziv_ordinacije}</TableCell>
                    <TableCell align='right'>{row.naziv_tipa}</TableCell>
                    <TableCell align='right'>{row.grad_naziv}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Djelatnost
