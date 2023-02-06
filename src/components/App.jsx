import React from "react";
import Form from ".//Form"

var userisRegistered = true;

function App() {
  return (
    <div className="container">
       <Form isRegistered={userisRegistered}/>
    </div>
  );
}

export default App;