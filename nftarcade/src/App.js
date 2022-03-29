import React from "react";
// import bootstrap and font awesome
import "./vendors/boostrap-compiled/css/bootstrap.css";
import "./vendors/bootstrap.min.css";
import "./vendors/font-awesome/css/all.css";
import ProfileScreen from "./components/ProfileScreen";
// stylesheets
import "./App.css";

function App(){
  return (
    <div className="App">

      <ProfileScreen />
    </div>
  );
}

export default App;
