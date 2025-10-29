import React from "react";
import Person from "./components/Person";
import Welcome from "./components/Welcome";

function App() {
  const person = { name: "Jyothish", age: 21, gender: "Male" };
  return (
    <>
      <Welcome />
      <h1>Displaying Components</h1>
      <Person person={person} />
      <Person person={{ name: "Mai", age: 20, gender: "Female" }} />
    </>
  );
}

export default App;
