import { React, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { FormHelperText } from '@material-ui/core'

const useForm = (validate, Success, Failed) => {
  const [values, setValues] = useState({
    korisnickoIme: '',
    lozinka: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    var error = validate(values)
    if (Object.keys(error).length === 0) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          korisnickoIme: values.korisnickoIme,
          lozinka: values.lozinka,
        }),
      }
      fetch(
        'http://localhost/Mario_Somodi/KV/VUV-Putni-nalozi/putniNaloziAPI/api/Authorization/auth.php',
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'false') {
            error.login = data.error
            Failed(error.login)
          } else {
            Success(data)
            Failed(null)
          }
        })
    }
    setErrors(error)
  }

  return { handleChange, values, handleSubmit, errors }
}

const validateInfo = (values) => {
  let errors = {}
  if (!values.korisnickoIme.trim()) {
    errors.korisnickoIme = 'Korisnicko ime je obavezno.'
  }
  if (!values.lozinka.trim()) {
    errors.lozinka = 'Lozinka je obavezna.'
  }
  return errors
}

const Login = (props) => {
  const [error, setError] = useState('')
  const Failed = (error) => {
    setError(error)
  }

  const { handleChange, values, handleSubmit, errors } = useForm(
    validateInfo,
    props.Success,
    Failed
  )

  return (
    <>
      <div className='boxContainer'>
        <div className='formContainer'>
          <form onSubmit={handleSubmit}>
            <TextField
              type='text'
              name='korisnickoIme'
              variant='outlined'
              label='Korisničko ime'
              className='input'
              value={values.korisnickoIme}
              onChange={handleChange}
            />
            {errors.korisnickoIme && (
              <FormHelperText className='helperText'>
                {errors.korisnickoIme}
              </FormHelperText>
            )}
            <TextField
              type='password'
              name='lozinka'
              variant='outlined'
              label='Lozinka'
              className='input'
              value={values.lozinka}
              onChange={handleChange}
            />
            {errors.lozinka && (
              <FormHelperText className='helperText'>
                {errors.lozinka}
              </FormHelperText>
            )}
            {error && (
              <FormHelperText className='helperText'>{error}</FormHelperText>
            )}
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className='input'
            >
              Prijavi se
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
