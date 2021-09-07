export default function validateInfo(values) {
  let errors = {}
  if (!values.ime.trim()) {
    errors.ime = 'Ime je obavezno.'
  }
  if (!values.prezime.trim()) {
    errors.prezime = 'Prezime je obavezno.'
  }
  if (!values.sifra.length === 6) {
    errors.sifra = 'Šifra se sastoji od 6 znamenaka.'
  }
  if (isNaN(values.sifra)) {
    errors.sifra = 'Šifra se sastoji samo od brojeva.'
  }
  if (!values.sifra.trim()) {
    errors.sifra = 'Šifra je obavezna.'
  }
  // if (!values.naziv_ordinacije.trim()) {
  //   errors.odjel = 'Morate odabrati ordinaciju.'
  // }
  if (!values.naziv_tipa.trim()) {
    errors.tip = 'Morate odabrati tip.'
  }
  return errors
}
