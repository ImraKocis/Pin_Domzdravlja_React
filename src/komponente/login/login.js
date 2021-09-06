import { React, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { FormHelperText } from '@material-ui/core'

import useForm from './useForm'

import './auth.css'

const validateInfo = (values) => {
  let errors = {}
  if (!values.userName.trim()) {
    errors.userName = 'Korisnicko ime je obavezno.'
  }
  if (!values.userPassword.trim()) {
    errors.userPassword = 'Lozinka je obavezna.'
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
              name='userName'
              variant='outlined'
              label='Korisničko ime'
              className='input'
              value={values.userName}
              onChange={handleChange}
            />
            {errors.userName && (
              <FormHelperText className='helperText'>
                {errors.userName}
              </FormHelperText>
            )}
            <TextField
              type='password'
              name='userPassword'
              variant='outlined'
              label='Lozinka'
              className='input'
              value={values.userPassword}
              onChange={handleChange}
            />
            {errors.userPassword && (
              <FormHelperText className='helperText'>
                {errors.userPassword}
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
              Success={props.Success}
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
