import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Button } from "../components/Button";

export default function Settings() {
  const { dark, setDark } = useContext(ThemeContext);
  const [username, setUsername] = useState("");

  return (
    <div>
      <label>Username:</label>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <p>Current Username: {username}</p>

      <Button text={dark ? "Switch to Light" : "Switch to Dark"} onClick={() => setDark(!dark)} />
    </div>
  );
}