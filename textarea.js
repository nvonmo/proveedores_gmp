export function Textarea({ placeholder, value, onChange }) {
  return (
    <textarea
      className="border rounded-xl p-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
