import { Link, Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div>
      This is the auth layout
      <br />
      <Outlet />
      <br />
      <Link to="/">Go back to home page</Link>
    </div>
  )
}

export default AuthLayout
