import { useEffect, useState } from "react";
LoginPage;
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
// import axios from "axios";
import NavbarComponent from "./components/NavbarComponent";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Stats from "./pages/Stats";
import AuthenticationComponent from "./components/AuthenticationComponent";
import CommentsPage from "./pages/CommentsPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const handleLogin = () => {
    setIsLogged(true);
  };

  useEffect(() => {
    if (window.location.href.includes("login")) {
      setLoginPage(true);
    }
  }, []);
  const handleLogout = () => {
    setIsLogged(false);
    setLoginPage((prev) => !prev);
  };

  console.log(loginPage);
  return (
    <>
      {!loginPage && (
        <NavbarComponent
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          handleLogout={handleLogout}
        />
      )}
      <Routes>
        <Route
          path="/"
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          exact
          element={<MainPage />}
        />
        <Route path="/stats" element={<Stats />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route
          path="/login"
          exact
          element={<LoginPage setIsLogged={setIsLogged} />}
        />
        <Route
          path="/authenticate"
          element={<AuthenticationComponent onLogin={handleLogin} />}
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
