import React, { useContext, useEffect, useState } from 'react'
import {BrowserRouter } from 'react-router-dom'
import AppRouter from './comps/appRouter'
import NavBar from './comps/navbar'
import { observer } from 'mobx-react-lite'
import { Context } from './index'
import { check } from './http/UsersApi'
import { Spinner } from 'react-bootstrap'


const App = observer(() => {

const {user} = useContext(Context) 
const {load, setLoad} = useState(true)

useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    })
}, [] )

  if (load) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
   
    </BrowserRouter>
  );
});

export default App;