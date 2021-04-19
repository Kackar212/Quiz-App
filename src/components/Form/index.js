export default function Form({ children, onSubmit, ...props }) {
  return (
    <form onSubmit={onSubmit} {...props}>
      {children}
    </form>
  )
}
