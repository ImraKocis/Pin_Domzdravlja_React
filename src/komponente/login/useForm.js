import { useState } from 'react'

const useForm = (validate, Success, Failed) => {
  const [values, setValues] = useState({
    userName: '',
    userPassword: '',
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
          userName: values.userName,
          userPassword: values.userPassword,
        }),
      }
      fetch(
        'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/login/login.php',
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'false') {
            error.login = data.error
            Failed(error.login)
          } else {
            Success(data)
            console.log(data)
            console.log('valja')
            Failed(null)
          }
        })
    }
    setErrors(error)
  }

  return { handleChange, values, handleSubmit, errors }
}

export default useForm
