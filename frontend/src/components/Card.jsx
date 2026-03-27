export function Card({ title, children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}