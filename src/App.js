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
import Login from './komponente/login/auth'
import OsobljeAdmin from './komponente/osoblje/osoblje-crud'
import OsobljeEdit from './komponente/osoblje/osobljeEdit'
import { createBrowserHistory } from 'history'
import OsobljeAdd from './komponente/osoblje/osobljeAdd'
import Statistika from './komponente/statistika/statistika'
const history = createBrowserHistory()

function redirect() {
  history.push('/ordinacije')
}
function App() {
  const [user, setUser] = useState(null)

  function handleSuccessLogin(data) {
    setUser({
      userName: data.userName,
      ime: data.ime,
      prezime: data.prezime,
      userId: data.userId,
      isLoged: true,
    })
    redirect()
  }
  function LogOut() {
    setUser(null)
    redirect()
  }
  return (
    <>
      <Router history={history}>
        <Sidebar logOut={LogOut} user={user} />
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
          <Route path='/admin-login' exact>
            <Login user={user} Success={handleSuccessLogin} />
          </Route>
          <Route path='/administracija' exact>
            <OsobljeAdmin user={user} handleSuccessLogin={handleSuccessLogin} />
          </Route>
          <Route path='/osoblje/azuriraj/id/:id' exact>
            <OsobljeEdit user={user} />
          </Route>
          <Route path='/administracija/dodaj' exact>
            <OsobljeAdd user={user} />
          </Route>
          <Route path='/statistika' exact>
            <Statistika user={user} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
