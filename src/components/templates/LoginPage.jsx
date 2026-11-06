import { Link } from 'react-router-dom'
import LoginForm from '../organisms/LoginForm.jsx'

function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-panel" aria-labelledby="login-title">
        <h1
          className="auth-panel__title"
          id="login-title"
          onClick={() => document.getElementById('email')?.focus()}
        >
          Login
        </h1>
        <p className="auth-panel__subtitle">
          Welcome, Please enter your details
        </p>
        <LoginForm />
        <p className="auth-panel__footer">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="auth-panel__link">
            Register
          </Link>
        </p>
      </section>
    </main>
  )
}

export default LoginPage
