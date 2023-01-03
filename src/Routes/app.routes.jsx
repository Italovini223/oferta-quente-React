import {Route, Routes} from 'react-router-dom'

import { Details } from '../pages/Details'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/SingIn' element={<Home />} />
      <Route path='details' element={<Details />} />
    </Routes>
  )
}