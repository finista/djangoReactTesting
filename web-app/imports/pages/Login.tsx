import AuthForm from "@imports/components/ui/auth_form"
import Navbar from "@imports/components/shared/navbar"

const Login = () => {
  return (
    <>
      <Navbar />
      <AuthForm route="user/token/" method="login" />
    </>
  )
}

export default Login