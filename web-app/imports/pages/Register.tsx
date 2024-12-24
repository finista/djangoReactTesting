import Navbar from "@imports/components/shared/navbar"
import AuthForm from "@imports/components/ui/auth_form"

const Register = () => {
  return (
    <>
      <Navbar />
      <AuthForm route="/user/register/" method="register" />
    </>
  )
}

export default Register