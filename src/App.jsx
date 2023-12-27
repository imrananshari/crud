import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './CRUD/Home'
import CreateUser from './CRUD/CreateUser'
import Users from './CRUD/Users'
import Edit from './CRUD/Edit'



const App = () => {
  return (
  <div>

    <BrowserRouter>
     <Home/>
     <Routes>
     <Route element={<Users/>} path='/users'></Route>
     <Route  element={<CreateUser/> } path='/'></Route>
     <Route  element={<Edit/> } path='/edit/:idno'></Route>
     </Routes>
    
    </BrowserRouter>
  </div>
  )
}

export default App