import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/collect");
    fetch("http://localhost:3001/metrics");
  });

  // /https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard
  return <Dashboard />;
}

export default App;
