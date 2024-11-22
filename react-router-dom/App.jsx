import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import AuthLayout from "./pages/AuthLayout"

import Login from "./components/Login"
import Register from "./components/Register"

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />

        <Route element={<AuthLayout/>}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
    </Routes>
  )
}

export default App
