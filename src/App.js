import React, { Component, useState } from "react";


const Dummy = () => {
  const inputRef = useRef();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <input ref={inputRef} name="name" value={name} placeholder="name" />
      <input
        ref={inputRef}
        name="lastName"
        value={lastName}
        placeholder="lastName"
      />
      <button type="button" onClick={() => inputRef.current.focus()}>
        Button
      </button>
    </>
  );
};
export default class App extends Component {
  render() {
    return (
      <div>
        <Dummy />
      </div>
    );
  }
}
