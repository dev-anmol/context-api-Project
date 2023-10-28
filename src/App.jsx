import { useState } from "react";
import UserContext from "./Context/UserContext";
import UserContextProvider from "./Context/UserContextProvider";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Welcome to our Page</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
