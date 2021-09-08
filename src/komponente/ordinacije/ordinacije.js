import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
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
import { TableFooter, TablePagination } from '@material-ui/core'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import {
  FirstPage,
  LastPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons'
import './ordinacije.css'
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}))
function TablePaginationActions(props) {
  const theme = useTheme()
  const classes = useStyles1()
  const { count, page, rowsPerPage, onChangePage } = props
  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </div>
  )
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

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

function Row(props) {
  const { row, row_index } = props
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
          {row_index + 1}
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

export default function OrdinacijeAll() {
  const [isFilterActive, setIsFilterActive] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [zupanije, setZupanije] = useState([])
  const [zupanija, setZupanija] = useState('all')
  const getZupanije = async () => {
    const res_zupanija = await fetch(url_zupanije, requestOptions)
    const zupanija = await res_zupanija.json()
    setZupanije(zupanija)
  }
  const [gradovi, setGradovi] = useState([])
  const [gradoviZupanije, setGradoviZupanije] = useState([])
  const [grad, setGrad] = useState('')
  const [gradSelectDisabled, setGradSelectDisabled] = useState(true)
  const getGradovi = async () => {
    const res_grad = await fetch(url_gradovi, requestOptions)

    const grad = await res_grad.json()
    setGradovi(grad)
  }
  const [djelatnosti, setDjelatnosti] = useState([])
  const [djelatnost, setDjelatnost] = useState('all')
  const getDjelatnosti = async () => {
    const res_djel = await fetch(url_djelatnosti, requestOptions)
    const djelatnost = await res_djel.json()
    setDjelatnosti(djelatnost)
  }

  const [djelatnostSelectListDisable, setDjelatnostSelectListDisable] =
    useState(false)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeZupanija = (id_zupanije) => {
    setZupanija(id_zupanije)
    setGradoviZupanije(
      gradovi.filter((grad) => grad.id_zupanije === id_zupanije)
    )
    setGradSelectDisabled(false)
    if (id_zupanije === 'all') {
      setIsFilterActive(false)
      setGrad('')
      setGradSelectDisabled(true)
      setDjelatnost('')
    } else {
      setOrdinacije(
        ordinacijeStatic.filter((data) => data.id_zupanije === id_zupanije)
      )
      setIsFilterActive(true)
    }
    if (grad === '' && id_zupanije !== 'all') {
      setDjelatnost('')
    }
  }

  const handleChangeGrad = (id_grada) => {
    setGrad(id_grada)
    setOrdinacije(ordinacijeStatic.filter((data) => data.id_grada === id_grada))

    setDjelatnost('')
  }
  const hanldeChangeDjelatnost = (id) => {
    setDjelatnost(id)

    setOrdinacije(
      zupanija === 'all'
        ? ordinacijeStatic.filter(
            (ordinacija) => ordinacija.id_djelatnost === id
          )
        : ordinacijeStatic.filter((ordinacija) => {
            if (grad === '') {
              return (
                ordinacija.id_zupanije === zupanija &&
                ordinacija.id_djelatnost === id
              )
            } else {
              return (
                ordinacija.id_zupanije === zupanija &&
                ordinacija.id_djelatnost === id &&
                ordinacija.id_grada === grad
              )
            }
          })
    )
    setIsFilterActive(true)
  }

  const [ordinacije, setOrdinacije] = useState([])
  const [ordinacijeStatic, setOrdinacijeStatic] = useState([])
  const getOrdinacije = async () => {
    const res_ordinacija = await fetch(url_ordinacije, requestOptions)
    const ordinacija = await res_ordinacija.json()
    setOrdinacije(ordinacija)
    setOrdinacijeStatic(ordinacija)
  }
  useEffect(() => {
    getOrdinacije()
    getZupanije()
    getGradovi()
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
            {gradoviZupanije.map((grad) => {
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
          disabled={djelatnostSelectListDisable}
          labelId='lbl-djelatnost'
          id='djelatnost'
          value={djelatnost}
          onChange={(e) => hanldeChangeDjelatnost(e.target.value)}
          options={djelatnosti}
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
              <TableCell>R. br.</TableCell>
              <TableCell>Naziv</TableCell>
              <TableCell>Opis</TableCell>
              <TableCell>Zupanija</TableCell>
              <TableCell>Grad</TableCell>
              <TableCell>Adresa</TableCell>
              <TableCell>Djelatnost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isFilterActive === false
              ? (rowsPerPage > 0
                  ? ordinacijeStatic.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : ordinacijeStatic
                ).map((row, index) => (
                  <Row
                    key={row.id_dom_zdravlja}
                    row_index={index}
                    row={row}
                  ></Row>
                ))
              : (rowsPerPage > 0
                  ? ordinacije.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : ordinacije
                ).map((row) => <Row key={row.id_dom_zdravlja} row={row}></Row>)}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15, { label: 'Svi', value: -1 }]}
                count={
                  isFilterActive ? ordinacije.length : ordinacijeStatic.length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                labelRowsPerPage='Broj redova po stranici: '
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  )
}
