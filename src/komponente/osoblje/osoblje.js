import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 1000,
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
const url =
  'http://localhost/Pin_Domzdravlja_1.0/domzdravlja/DomzdravljaAPI/api/osoblje/read.php'
const Osoblje = () => {
  const [osoblje, setOsoblje] = useState([])
  const getOsoblje = async () => {
    const res = await fetch(url)
    const osoblje = await res.json()
    setOsoblje(osoblje)
    console.log(osoblje)
  }

  useEffect(() => {
    getOsoblje()
  }, [])

  const classes = useStyles()

  return (
    <>
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align='right'>Ime</TableCell>
              <TableCell align='right'>Prezime</TableCell>
              <TableCell align='right'>Ordinacija</TableCell>
              <TableCell align='right'>Tip</TableCell>
              <TableCell align='right'>Grad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {osoblje.map((row) => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell align='right'>{row.ime}</TableCell>
                <TableCell align='right'>{row.prezime}</TableCell>
                <TableCell align='right'>{row.naziv_ordinacije}</TableCell>
                <TableCell align='right'>{row.naziv_tipa}</TableCell>
                <TableCell align='right'>{row.grad_naziv}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Osoblje
