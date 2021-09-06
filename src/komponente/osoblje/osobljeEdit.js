import { React, useState, useEffect } from 'react'
import useForm from './useEditForm'
import validate from './validateEditData'
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
} from '@material-ui/core'

export default function OsobljeEdit(props) {
  const { id } = useParams()
  const [successMessage, setSuccessMessage] = useState('')
  const [ordinacije, setOrdinacije] = useState([])
  const [tipovi, setTipovi] = useState([])

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

    fetch(
      'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/ordinacije/read.php',
      {
        method: 'GET',
        headers: myHeaders,
      }
        .then((response) => response.json())
        .then((data) => setOrdinacije(data))
    )

    fetch(
      'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/tipovi/read.php',
      {
        method: 'GET',
        headers: myHeaders,
      }
        .then((response) => response.json())
        .then((data) => setTipovi(data))
    )
  }, [])

  const { handleChange, values, handleSubmit, errors } = useForm(
    validate,
    idZaposlenika,
    Success,
    props.user
  )

  const handleExistingValues = (data) => {
    values.ime = data.ime
    values.prezime = data.prezime
    values.naziv_tipa = data.naziv_tipa //preako id-a
    values.naziv_ordinacije = data.naziv_ordinacije
    values.naziv_djelatnosti = data.naziv_djelatnosti //preako id-a
  }

  return (
    <>
      <Grid item xs>
        <Paper className='editContainer' elevation={6}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  fullWidth='true'
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
                  fullWidth='true'
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
              <Grid item xs></Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  )
}
