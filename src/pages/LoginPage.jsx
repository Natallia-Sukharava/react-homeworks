import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); 

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      if (existingUser.password === password) {
        localStorage.setItem("user", JSON.stringify({ username }));
        alert("You have successfully logged in.");
      } else {
        setError("Incorrect password.");
      }
    } else {
      const newUser = { username, password };
      const updatedUsers = [...users, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("user", JSON.stringify({ username }));
      alert("New user registered successfully.");
    }
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <main className="login-wrapper">
      <h2 className="login-title">Log in</h2>
      <div className="login-box">
        <form className="login-form" onSubmit={handleLogin}>
          <label>
            <span>User name</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="UserName"
              maxLength={20}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********************"
              maxLength={20}
            />
          </label>

          <div className="login-buttons">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>

          {error && <p className="login-error">{error}</p>}

        </form>
      </div>
    </main>
  );
}

export default LoginPage;
