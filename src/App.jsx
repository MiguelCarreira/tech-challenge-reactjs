import React from "react";

import MainRoutes from './Routes'
import "bootstrap/dist/css/bootstrap.css";
import "./stylesheets/App.scss";


const App = () => {
  return (
    <div className="app">
      <MainRoutes />
    </div>
  );
};

export default App;
