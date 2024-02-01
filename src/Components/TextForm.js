import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Enter Text here");

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCapital = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const change = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "black",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.title}</h1>
        <form>
          <div className="mb-3">
            <textarea
              style={{
                backgroundColor: props.mode === "light" ? "white" : "black",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="form-control"
              rows="10"
              value={text}
              onChange={change}
            ></textarea>
          </div>
          <button className="btn-primary btn mx-2" onClick={handleUpper}>
            Convert to upperCase
          </button>
          <button className="btn-primary btn mx-2" onClick={handleLower}>
            Convert to LowerCase
          </button>
          <button className="btn-primary btn mx-2" onClick={handleCapital}>
            Convert to CapitlizeCase
          </button>
          <button className="btn-primary btn" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>

      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "black",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Your Text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length}Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
};

export default TextForm;
