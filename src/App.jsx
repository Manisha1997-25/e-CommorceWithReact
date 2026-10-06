import { useContext, useState } from 'react'
import { useReducer } from 'react'

import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import { cartReducer, initialState } from './cart/cartReducer'
import { ThemeContext } from './theme/ThemeProvider'

function App() {
  const [loggedUser, setLoggedUser] = useState()
  const [state, dispatch] = useReducer(cartReducer, initialState)
  console.log("cart state", state)
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`app ${theme}`}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login setLoggedUser={setLoggedUser}/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      
      <Route path='/dashboard' element={<Dashboard 
      loggedUser={loggedUser} setLoggedUser={setLoggedUser}
      dispatch={dispatch} state={state}
      />}></Route>
      <Route path='/product-details/:prodID' element={<ProductDetails/>}></Route>
      <Route path='/cart' element={<Cart state={state} dispatch={dispatch}/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
