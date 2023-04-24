import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import "./Header.css";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase.js";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Saving user login info.
        dispatch({
          type: "Set_User",
          user: authUser,
        });
      } 
      else {
        // Logging out user
        dispatch({
          type: "Set_User",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/" element={[<Header/>, <Home/>]}/>
          <Route path="/checkout" element={[<Header/>, <Checkout/>]}/>
          <Route path = "/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
