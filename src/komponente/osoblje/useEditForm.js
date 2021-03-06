import { useState } from 'react'

const useForm = (validate, id, Success) => {
  const [values, setValues] = useState({
    ime: '',
    prezime: '',
    naziv_tipa: '',
    naziv_ordinacije: '',
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

    let requestOptions = {}
    //console.log(arr[0], arr[1])
    if (Object.keys(error).length === 0) {
      if (values.naziv_ordinacije === '') {
        requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'aplication/json' },
          body: JSON.stringify({
            id: id,
            ime: values.ime,
            prezime: values.prezime,
            tip: values.naziv_tipa,
            dom_zdravlja: 0,
            djelatnosti: 0,
          }),
        }
      } else {
        var arr = values.naziv_ordinacije.split(',')
        requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'aplication/json' },
          body: JSON.stringify({
            id: id,
            ime: values.ime,
            prezime: values.prezime,
            tip: values.naziv_tipa,
            dom_zdravlja: arr[0],
            djelatnosti: arr[1],
          }),
        }
      }

      fetch(
        'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/osoblje/update.php',
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          Success(data.message)
          //window.location.reload()
        })
        .catch((error) => {
          console.log(
            'There has been a problem with your fetch operation:',
            error
          )
        })
    }
    setErrors(error)
  }

  return { handleChange, values, handleSubmit, errors }
}

export default useForm
