import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Paper,
} from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { React, useState, useEffect } from 'react'
import './statistika.css'
function Row(props) {
  const { row } = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.id_djelatnost}
        </TableCell>
        <TableCell align='right'>{row.naziv_djelatnosti}</TableCell>
      </TableRow>
      <TableCell>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Box>
            <Typography variant='h6' gutterBottom component='div'>
              Statistika po gradovima
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Naziv grada</TableCell>
                  <TableCell>Broj ordinacija u tom gradu</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.array_gradovi.map((ordinacijaRow) => (
                  <TableRow>
                    <TableCell component='th' scope='row'>
                      {ordinacijaRow.name}
                    </TableCell>
                    <TableCell>{ordinacijaRow.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </>
  )
}
export default function Statistika(props) {
  const [djelatnosti, setDjelatnosti] = useState([])
  const [ordinacije, setOrdinacije] = useState([])
  const [gradovi, setGradovi] = useState([])

  const [data, setData] = useState([])

  function GetAllData(ordinacije1, gradovi, djelatnosti) {
    console.log('GetAllData')
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
        ordinacije1.forEach((ordinacija) => {
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
    setData(dataObj)
    // setData(dataObj)
  }

  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  useEffect(() => {
    const ordinacijePromise = new Promise((resolve) => {
      fetch(
        'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/ordinacije/read.php',
        {
          method: 'GET',
          headers: myHeaders,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          resolve(data)
        })
    })

    const djelatnostiPromise = new Promise((resolve) => {
      fetch(
        'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/djelatnost/read.php',
        {
          method: 'GET',
          headers: myHeaders,
        }
      )
        .then((response) => response.json())
        .then((data) => resolve(data))
    })

    const gradoviPromise = new Promise((resolve) => {
      fetch(
        'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/gradovi/read.php',
        {
          method: 'GET',
          headers: myHeaders,
        }
      )
        .then((response) => response.json())
        .then((data) => resolve(data))
    })

    Promise.all([ordinacijePromise, gradoviPromise, djelatnostiPromise]).then(
      (values) => {
        GetAllData(values[0], values[1], values[2])
      }
    )

    // }).then((value) => {
    //   console.log(value)
    //   setData(GetAllData(ordinacije, gradovi, djelatnosti))
    // })
  }, [])

  return (
    <>
      {data && (
        <TableContainer className='table-main-statistika' component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Redni broj </TableCell>
                <TableCell>Djelatnost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <Row key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}
