import { React, useState, useEffect } from 'react'
import Login from '../login/login'
import useForm from './useEditForm'
import validate from './validateEditData'
import './osoblje.css'
import { Link, useParams } from 'react-router-dom'
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
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core'

export default function OsobljeEdit(props) {
  const { id } = useParams()
  const [successMessage, setSuccessMessage] = useState('')
  const [ordinacije, setOrdinacije] = useState([])
  const [tipovi, setTipovi] = useState([])
  const [update, setUpdate] = useState(1)
  const [checked, setChecked] = useState(false)
  const [disableSelect, setDisableSelect] = useState(false)
  const [disableCheckbox, setDisableCheckbox] = useState(false)

  function handleChangeCheckbox(e) {
    setChecked(e.target.checked)
    setDisableSelect(!disableSelect)
    values.naziv_ordinacije = ''
  }

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

    fetch(
      'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/osoblje/readSingle.php?id=' +
        id,
      {
        method: 'GET',
        headers: myHeaders,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        handleExistingValues(data)
      })
  }, [])

  const { handleChange, values, handleSubmit, errors } = useForm(
    validate,
    id,
    Success
  )

  const handleExistingValues = (data) => {
    values.ime = data.ime
    values.prezime = data.prezime
    values.naziv_tipa = data.tip
    values.naziv_ordinacije = data.dom_zdravlja + ',' + data.djelatnosti
    if (data.dom_zdravlja == 0) {
      setDisableCheckbox(true)
    }
    //console.log(values.naziv_ordinacije)
    //values.naziv_djelatnosti = data.naziv_djelatnosti
    setUpdate(update + 1)
  }

  return (
    <>
      {props.user !== null ? (
        <Grid item xs>
          <Paper className='editContainer' elevation={10}>
            <form onSubmit={handleSubmit}>
              <Grid className='gridClass' container spacing={3}>
                <Grid item xs>
                  <TextField
                    //fullWidth='true'
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
                    //fullWidth='true'
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
                  {ordinacije && (
                    <>
                      <FormGroup row>
                        <FormControl
                          variant='outlined'
                          className='selectEditOrdinacije'
                        >
                          <InputLabel id='labelOrdinacija'>
                            Ordinacija
                          </InputLabel>
                          <Select
                            labelId='labelOrdinacija'
                            disabled={disableSelect}
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
                        <section className='checkBox'>
                          <FormControlLabel
                            control={
                              <Checkbox
                                color='primary'
                                checked={checked}
                                onChange={handleChangeCheckbox}
                                disabled={disableCheckbox}
                              />
                            }
                            label='Otpusti'
                            labelPlacement='end'
                          ></FormControlLabel>
                        </section>
                      </FormGroup>
                      {errors.ordinacija && (
                        <FormHelperText className='helperText'>
                          {errors.ordinacija}
                        </FormHelperText>
                      )}
                    </>
                  )}
                </Grid>
                <Grid item xs>
                  {tipovi && (
                    <>
                      <FormControl variant='outlined' className='selectEdit'>
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
                <Link id='redirect' to='/djelatnost' />
                <Button
                  id='submitButton'
                  type='submit'
                  variant='contained'
                  color='primary'
                  className='input'
                >
                  Azuriraj
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
