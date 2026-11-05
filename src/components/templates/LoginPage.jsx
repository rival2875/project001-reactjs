import LoginForm from '../organisms/LoginForm.jsx'

function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-panel" aria-labelledby="login-title">
        <h1 className="auth-panel__title" id="login-title">
          Login
        </h1>
        <p className="auth-panel__subtitle">
          Welcome, Please enter your details
        </p>
        <LoginForm />
      </section>
    </main>
  )
}

export default LoginPage
