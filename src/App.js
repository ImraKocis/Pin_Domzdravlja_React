import './App.css'
import { React, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './Navbar/sidebar'
import Test from './pages/test'
import Ordinacije from './komponente/ordinacije/ordinacije'
import OsobljeOOM from './komponente/osoblje/osobljeOOM'
import OsobljeP from './komponente/osoblje/osobljeP'
import OsobljeZZZ from './komponente/osoblje/osobljeZZZ'
import OsobljeS from './komponente/osoblje/osobljeS'
import Osoblje from './komponente/osoblje/osoblje'
import Djelatnost from './komponente/djelatnosti/djelatnost'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/ordinacije' exact>
            <Ordinacije></Ordinacije>
          </Route>
          <Route path='/osoblje/opca-obiteljska-medicina' exact>
            <OsobljeOOM></OsobljeOOM>
          </Route>
          <Route path='/osoblje/zdravstvena-zastita-zena' exact>
            <OsobljeZZZ />
          </Route>
          <Route path='/osoblje/stomatologija' exact>
            <OsobljeS />
          </Route>
          <Route path='/osoblje/pedijatrija' exact>
            <OsobljeP />
          </Route>
          <Route path='/djelatnost' exact>
            <Djelatnost />
          </Route>
          {/* <Route path='/djelatnost' exact>
            <Djelatnost />
          </Route> */}
        </Switch>
      </Router>
    </>
  )
}

export default App
