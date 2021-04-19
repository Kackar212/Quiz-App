export default function Input({ type, name, id, ...props }) {
  return <input type={type} name={name} id={id} {...props} />
}