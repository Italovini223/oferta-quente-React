import { Routes, Route } from "react-router-dom"
import { SingIn } from "../pages/SingIn"

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
    </Routes>
  )
}