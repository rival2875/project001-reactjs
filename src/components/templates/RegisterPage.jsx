import RegisterForm from '../organisms/RegisterForm.jsx'

function RegisterPage() {
  return (
    <main className="auth-page">
      <section className="auth-panel" aria-labelledby="register-title">
        <h1 className="auth-panel__title" id="register-title">
          Register
        </h1>
        <p className="auth-panel__subtitle">
          Welcome, Please enter your details
        </p>
        <RegisterForm />
      </section>
    </main>
  )
}

export default RegisterPage
