function TextInput({ id, type, placeholder, autoComplete }) {
  return (
    <input
      className="text-input"
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required
    />
  )
}

export default TextInput
