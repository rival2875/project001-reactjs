function PrimaryButton({ children, type = 'button' }) {
  return (
    <button className="primary-button" type={type}>
      {children}
    </button>
  )
}

export default PrimaryButton
