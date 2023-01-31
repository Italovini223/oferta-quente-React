import {Route, Routes} from 'react-router-dom'

import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile';
import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";
import {Favorites} from '../pages/Favorites';



export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='details' element={<Details />} />
      <Route path="/singIn" element={<SingIn />} />
      <Route path="/singUp" element={<SingUp />} />
      <Route path='/profile' element={<Profile />} /> 
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
  )
}