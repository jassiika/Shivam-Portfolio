function Navbar({ setMessage }) {
  return (
   <nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "20px 50px",
    display: "flex",
    alignItems: "center",
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(10px)",
    color: "white",
    zIndex: 1000,
  }}
>
<h2
  style={{
    position: "absolute",
    left: "50px",
  }}
>
  Shivam
</h2>

      <ul
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  }}
>
        <li
          onMouseEnter={() =>
            setMessage("Welcome to my portfolio 👋")
          }
          onMouseLeave={() => setMessage("")}
        >
          Home
        </li>

        <li
          onMouseEnter={() =>
            setMessage("Learn more about me 🚀")
          }
          onMouseLeave={() => setMessage("")}
        >
          About
        </li>

        <li
          onMouseEnter={() =>
            setMessage("These are my skills 💻")
          }
          onMouseLeave={() => setMessage("")}
        >
          Skills
        </li>

        <li
          onMouseEnter={() =>
            setMessage("Check out my projects 🔥")
          }
          onMouseLeave={() => setMessage("")}
        >
          Projects
        </li>

        <li
          onMouseEnter={() =>
            setMessage("Let's connect 🤝")
          }
          onMouseLeave={() => setMessage("")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;