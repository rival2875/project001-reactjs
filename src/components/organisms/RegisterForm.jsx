import { useState } from 'react'
import FormField from '../molecules/FormField.jsx'
import PrimaryButton from '../atoms/PrimaryButton.jsx'

function RegisterForm() {
  const [message, setMessage] = useState('')

  function handleChange(event) {
    const form = event.currentTarget
    const password = form.elements.password.value
    const confirmPassword = form.elements.confirmPassword
    confirmPassword.setCustomValidity(
      confirmPassword.value === password ? '' : 'Password tidak cocok.',
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Form ini belum terhubung ke layanan autentikasi.')
  }

  return (
    <form className="auth-form" onChange={handleChange} onSubmit={handleSubmit}>
      <FormField
        id="fullname"
        label="Fullname"
        type="text"
        placeholder="Insert your name here..."
        autoComplete="name"
      />
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
        autoComplete="new-password"
      />
      <FormField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="••••••"
        autoComplete="new-password"
      />
      <PrimaryButton type="submit">Register</PrimaryButton>
      {message && (
        <p className="auth-form__message" role="status">
          {message}
        </p>
      )}
    </form>
  )
}

export default RegisterForm
