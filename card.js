export function Card({ children, className }) {
  return <div className={`bg-white shadow-md rounded-2xl p-4 ${className}`}>{children}</div>;
}
export function CardContent({ children }) {
  return <div>{children}</div>;
}
