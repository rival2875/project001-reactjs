import { Link } from 'react-router-dom'
import RegisterForm from '../organisms/RegisterForm.jsx'

function RegisterPage() {
  return (
    <main className="auth-page">
      <section className="auth-panel" aria-labelledby="register-title">
        <h1
          className="auth-panel__title"
          id="register-title"
          onClick={() => document.getElementById('fullname')?.focus()}
        >
          Register
        </h1>
        <p className="auth-panel__subtitle">
          Welcome, Please enter your details
        </p>
        <RegisterForm />
        <p className="auth-panel__footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-panel__link">
            Login
          </Link>
        </p>
      </section>
    </main>
  )
}

export default RegisterPage
