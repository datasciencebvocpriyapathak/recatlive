import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
//import About from "./Components/About";
//import { BrowserRouter as Router,  Routes,Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 1700);
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Enable light Mode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been", "success");
      document.title = "TextUtility-Dark Mode Enable";
    } else {
      setMode("light");
      setModeText("Enable dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been", "success");
      document.title = "TextUtitlity-Light Mode Enable";
    }
  };
  return (
    <>



      <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          modeText={modeText}
        />

        <Alert alert={alert} />
        
          
    
            
            <TextForm mode={mode} />
           
           
    </>
  );
}

export default App;