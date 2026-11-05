import TextInput from '../atoms/TextInput.jsx'

function FormField({ id, label, type, placeholder, autoComplete }) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}
      </label>
      <TextInput
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  )
}

export default FormField
