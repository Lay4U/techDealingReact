import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";
import LoginForm from "../containers/auth/LoginForm";
import RegisterForm from "../containers/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm/>
    </AuthTemplate>
  )
}

export default RegisterPage;