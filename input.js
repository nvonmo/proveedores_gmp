export function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className="border rounded-xl p-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
