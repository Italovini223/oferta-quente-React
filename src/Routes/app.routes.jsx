import {Route, Routes} from 'react-router-dom'

import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";


export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='details' element={<Details />} />
      <Route path="/singIn" element={<SingIn />} />
      <Route path="/register" element={<SingUp />} />
    </Routes>
  )
}