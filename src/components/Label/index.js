export default function Label({ htmlFor, children, ...props }) {
  return (
    <label htmlFor={htmlFor} {...props}>{children}</label>
  );
}