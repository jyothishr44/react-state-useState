import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    setName({ firstName: "", lastName: "" });
  }
  return (
    <div>
      Forms in react!
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          placeholder="Ur first name here"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          placeholder="Ur last name here"
          value={name.lastName}
        />
        <br />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}
