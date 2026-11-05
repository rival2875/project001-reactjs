import { useState } from 'react'
import FormField from '../molecules/FormField.jsx'
import PrimaryButton from '../atoms/PrimaryButton.jsx'

function LoginForm() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Form ini belum terhubung ke layanan autentikasi.')
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <FormField
        id="email"
        label="Email"
        type="email"
        placeholder="example@email.com"
        autoComplete="email"
      />
      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="••••••"
        autoComplete="current-password"
      />
      <PrimaryButton type="submit">Login</PrimaryButton>
      {message && (
        <p className="auth-form__message" role="status">
          {message}
        </p>
      )}
    </form>
  )
}

export default LoginForm
