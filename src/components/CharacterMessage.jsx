export default function CharacterMessage({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "160px",
        right: "190px",
        background: "white",
        color: "black",
        padding: "16px 22px",
        borderRadius: "18px",
        zIndex: 3000,
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}
    >
      {message}
    </div>
  );
}