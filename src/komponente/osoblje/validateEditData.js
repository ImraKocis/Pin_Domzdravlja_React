export default function validateInfo(values) {
  let errors = {}
  if (!values.ime.trim()) {
    errors.ime = 'Ime je obavezno.'
  }
  if (!values.prezime.trim()) {
    errors.prezime = 'Prezime je obavezno.'
  }
  if (!values.naziv_tipa.trim()) {
    errors.tip = 'Morate odabrati tip.'
  }
  return errors
}
