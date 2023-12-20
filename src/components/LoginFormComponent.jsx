import React, { useState } from "react";

const LoginFormComponent = ({ onLogin, setIsLoggedIn }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
    setIsLoggedIn(true);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="login-inputs-container">
          <label className="login-label">Email : </label>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="login-label">Password : </label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            name="password"
            required
          />
        </div>
        <br />
        <div className="login-buttons-container">
          <button
            className="login-button"
            type="submit"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
          <br />

          <div className="remember-me-container">
            {" "}
            <p id="remember-me">Remember me</p>
            <input
              className="memory"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked((prevState) => !prevState)}
            />{" "}
          </div>

          <button className="login-button" type="button">
            Cancel
          </button>
          <br />
          <a className="memory" id="forgot" href="#">
            {" "}
            Forgot password?{" "}
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginFormComponent;
