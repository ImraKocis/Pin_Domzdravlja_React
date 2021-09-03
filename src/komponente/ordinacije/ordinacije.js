import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
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

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
})

function createData(
  id_dom_zdravlja,
  naziv,
  opis,
  grad,
  zupanija,
  adresa,
  djelatnost,
  tel,
  email,
  radno_vrijeme,
  napomena,
  arr_osoblje
) {
  return {
    id_dom_zdravlja,
    naziv,
    opis,
    grad,
    zupanija,
    adresa,
    djelatnost,
    data: [
      {
        telefon: tel,
        email: email,
        radno_vr: radno_vrijeme,
        napomena: napomena,
        osoblje: arr_osoblje.map((osoba) => {
          return {
            ime: osoba.ime,
            prezime: osoba.prezime,
            tip: osoba.naziv_tipa,
          }
        }),
      },
    ],
  }
}
function Row(props) {
  const { row } = props
  const [isOpen, setIsOpen] = useState(false)
  const [isOsobeOpen, setIsOsobeOpen] = useState(false)
  const classes = useRowStyles()

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.id_dom_zdravlja}
        </TableCell>
        <TableCell>{row.naziv_ordinacije}</TableCell>
        <TableCell>{row.opis}</TableCell>
        <TableCell>{row.zupanija_naziv}</TableCell>
        <TableCell>{row.grad_naziv}</TableCell>
        <TableCell>{row.adresa}</TableCell>
        <TableCell>{row.naziv_djelatnosti}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={isOpen} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Dodatne informacije
              </Typography>
              <Table size='small' aria-label='info'>
                <TableHead>
                  <TableRow>
                    <TableCell>Telefon</TableCell>
                    <TableCell>emial</TableCell>
                    <TableCell>Radno vrijeme</TableCell>
                    <TableCell>Napomena</TableCell>
                    <TableCell>Osoblje</TableCell>
                    <TableCell align='right'>
                      <IconButton
                        aria-label='expand row'
                        size='small'
                        onClick={() => setIsOsobeOpen(!isOsobeOpen)}
                      >
                        {isOsobeOpen ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell component='th' scope='row'>
                      {row.br_telefona}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.radno_vrijeme}</TableCell>
                    <TableCell>{row.napomena}</TableCell>
                    <TableCell>
                      <Collapse in={isOsobeOpen} timeout='auto' unmountOnExit>
                        <Box>
                          <Table size='small' aria-label='osoblje'>
                            <TableHead>
                              <TableRow>
                                <TableCell>Ime</TableCell>
                                <TableCell>Prezime</TableCell>
                                <TableCell>Funkcija</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {row.zaposlenici.map((osoba, index) => (
                                <TableRow key={index}>
                                  <TableCell component='th' scope='row'>
                                    {osoba.ime}
                                  </TableCell>
                                  <TableCell>{osoba.prezime}</TableCell>
                                  <TableCell>{osoba.naziv_tipa}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
/* Row.propTypes = {
  row: PropTypes.shape({
    id_dom_zdravlja: PropTypes.number.isRequired,
    naziv: PropTypes.string.isRequired,
    opis: PropTypes.string.isRequired,
    grad: PropTypes.string.isRequired,
    zupanija: PropTypes.string.isRequired,
    adresa: PropTypes.string.isRequired,
    djelatnost: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        telefon: PropTypes.string.isRequired,
        emial: PropTypes.string.isRequired,
        radno_vr: PropTypes.string.isRequired,
        napomena: PropTypes.string.isRequired,
        osoblje: PropTypes.arrayOf(
          PropTypes.shape({
            ime: PropTypes.string.isRequired,
            prezime: PropTypes.string.isRequired,
            tip: PropTypes.string.isRequired,
          }).isRequired
        ),
      }).isRequired
    ),
  }).isRequired,
} */

export default function OrdinacijeAll() {
  const [isFilterActive, setIsFilterActive] = useState(false)

  const [zupanije, setZupanije] = useState([])
  const [zupanija, setZupanija] = useState('all')
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
  const [djelatnost, setDjelatnost] = useState('all')
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
    if (id_zupanije === 'all') {
      setIsFilterActive(false)
    } else {
      setOrdinacije(
        ordinacijeStatic.filter((data) => data.id_zupanije === id_zupanije)
      )
      setIsFilterActive(true)
    }
  }

  const handleChangeGrad = (id_grada) => {
    setGrad(id_grada)
    setOrdinacije(ordinacijeStatic.filter((data) => data.id_grada === id_grada))
  }
  const hanldeChangeDjelatnost = (id) => {
    setDjelatnost(id)
    setOrdinacije(ordinacije.filter((data) => data.id_djelatnost === id))
    setIsFilterActive(true)
    console.log(ordinacije)
  }

  const [ordinacije, setOrdinacije] = useState([])
  const [ordinacijeStatic, setOrdinacijeStatic] = useState([])
  const getOrdinacije = async () => {
    const res_ordinacija = await fetch(url_ordinacije, requestOptions)
    const ordinacija = await res_ordinacija.json()
    setOrdinacije(ordinacija)
    setOrdinacijeStatic(ordinacija)
    //console.log(ordinacija[0].id_dom_zdravlja)
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
            <MenuItem value='all'>Prikazi sve</MenuItem>
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
            onChange={(e) => handleChangeGrad(e.target.value)}
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
          onChange={(e) => hanldeChangeDjelatnost(e.target.value)}
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
      <TableContainer className='table-main' component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Id ordinacije</TableCell>
              <TableCell>Naziv</TableCell>
              <TableCell>Opis</TableCell>
              <TableCell>Zupanija</TableCell>
              <TableCell>Grad</TableCell>
              <TableCell>Adresa</TableCell>
              <TableCell>Djelatnost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordinacijeStatic && isFilterActive === false
              ? ordinacijeStatic.map((row) => (
                  <Row key={row.id_dom_zdravlja} row={row}></Row>
                ))
              : ordinacije.map((row) => (
                  <Row key={row.id_dom_zdravlja} row={row}></Row>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
