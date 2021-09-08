import { React, useState, useEffect } from 'react'
import Login from '../login/login'
import useForm from './useAddForm'
import validate from './validateAddData'
import './osoblje.css'
import { Link } from 'react-router-dom'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import {
  Paper,
  Grid,
  TextField,
  FormHelperText,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'

export default function OsobljeAdd(props) {
  const [successMessage, setSuccessMessage] = useState('')
  const [ordinacije, setOrdinacije] = useState([])
  const [tipovi, setTipovi] = useState([])
  const [open, setOpen] = useState(false)

  function Success(message) {
    setSuccessMessage(message)
    document.getElementById('submitButton').disabled = true
    setTimeout(() => {
      document.getElementById('redirect').click()
    }, 2000)
  }

  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  useEffect(() => {
    fetch(
      'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/ordinacije/read.php',
      {
        method: 'GET',
        headers: myHeaders,
      }
    )
      .then((response) => response.json())
      .then((data) => setOrdinacije(data))

    fetch(
      'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/tipovi/read.php',
      {
        method: 'GET',
        headers: myHeaders,
      }
    )
      .then((response) => response.json())
      .then((data) => setTipovi(data))
  }, [])

  const { handleChange, values, handleSubmit, errors } = useForm(
    validate,
    Success
  )

  return (
    <>
      {props.user !== null ? (
        <Grid item xs>
          <Paper className='editContainer' elevation={10}>
            <form onSubmit={handleSubmit}>
              <Grid className='gridClass' container spacing={3}>
                <Grid item xs>
                  <TextField
                    id='imeInput'
                    type='text'
                    name='ime'
                    variant='outlined'
                    label='Ime'
                    className='input'
                    value={values.ime}
                    onChange={handleChange}
                  />
                  {errors.ime && (
                    <FormHelperText className='helperText'>
                      {errors.ime}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs>
                  <TextField
                    type='text'
                    name='prezime'
                    variant='outlined'
                    label='Prezime'
                    className='input'
                    value={values.prezime}
                    onChange={handleChange}
                  />
                  {errors.prezime && (
                    <FormHelperText className='helperText'>
                      {errors.prezime}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs>
                  <TextField
                    type='text'
                    name='sifra'
                    variant='outlined'
                    label='Sifra djelatnika'
                    className='input'
                    value={values.sifra}
                    onChange={handleChange}
                  />
                  {errors.sifra && (
                    <FormHelperText className='helperText'>
                      {errors.sifra}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs>
                  {tipovi && (
                    <>
                      <FormControl variant='outlined' className='selectTip'>
                        <InputLabel id='labelTipovi'>Tip</InputLabel>
                        <Select
                          labelId='labelTipovi'
                          name='naziv_tipa'
                          value={values.naziv_tipa}
                          onChange={handleChange}
                          label='Tip'
                        >
                          {tipovi.map((tip) => (
                            <MenuItem value={tip.id_tipa}>
                              {tip.naziv_tipa}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {errors.tip && (
                        <FormHelperText className='helperText'>
                          {errors.tip}
                        </FormHelperText>
                      )}
                    </>
                  )}
                </Grid>
                <IconButton
                  aria-label='expand-form'
                  size='small'
                  onClick={() => setOpen(!open)}
                >
                  Zaposli{' '}
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <Grid item xs>
                    {ordinacije && (
                      <>
                        <FormControl
                          variant='outlined'
                          className='selectOrdinacija'
                        >
                          <InputLabel id='labelOrdinacija'>
                            Ordinacija
                          </InputLabel>
                          <Select
                            labelId='labelOrdinacija'
                            name='naziv_ordinacije'
                            value={values.naziv_ordinacije}
                            onChange={handleChange}
                            label='Ordinacija'
                          >
                            {ordinacije.map((ordinacija, index) => (
                              <MenuItem
                                key={index}
                                value={
                                  ordinacija.id_dom_zdravlja +
                                  ',' +
                                  ordinacija.id_djelatnost
                                }
                              >
                                {ordinacija.naziv_ordinacije}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </>
                    )}
                  </Grid>
                </Collapse>
                <Link id='redirect' to='/djelatnost' />
                <Button
                  id='submitButton'
                  type='submit'
                  variant='contained'
                  color='primary'
                  className='input'
                >
                  Dodaj djelatnika
                </Button>
                {successMessage && (
                  <FormHelperText className='successText'>
                    {successMessage}
                  </FormHelperText>
                )}
              </Grid>
            </form>
          </Paper>
        </Grid>
      ) : (
        <Login user={props.user} Success={props.handleSuccessLogin} />
      )}
    </>
  )
}
