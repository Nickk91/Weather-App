import React, { useEffect, useState } from "react";

const AuthenticationComponent = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const [availableUsers, setAvailableUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isAuthenticated = authenticateUser(email, password);

      if (isAuthenticated) {
        onLogin();
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  useEffect(() => {
    async function fetchUserData() {
      setIsFetching(true);

      try {
        const response = await fetch(
          "https://mockapi.io/clone/657ed6ec3e3f5b1894643d07/users"
        );
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        setAvailableUsers(resData);
      } catch (error) {
        console.error("Error during authentication:", error);
      } finally {
        setIsFetching(false);
      }
    }

    fetchUserData();
  }, []);

  const authenticateUser = (email, password) => {
    // Implement authentication logic here (e.g., check against available users)
    const userExists = availableUsers.some(
      (user) => user.email === email && user.password === password
    );
    return userExists;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default AuthenticationComponent;
