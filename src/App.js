import './App.css'
import { React, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './Navbar/sidebar'
import Test from './pages/test'
import Ordinacije from './komponente/ordinacije'
import Osoblje from './komponente/osoblje'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Ordinacije></Ordinacije>
        <Osoblje></Osoblje>
        <Switch>
          <Route path='/' exact component={Test} />
          <Route path='/' exact component={Test} />
          <Route path='/' exact component={Test} />
          <Route path='/' exact component={Test} />
          <Route path='/' exact component={Test} />
          <Route path='/' exact component={Test} />
        </Switch>
      </Router>
    </>
  )
}

export default App
