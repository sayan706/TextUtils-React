import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick= ()=>{
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick= ()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleClClick= ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text is cleared","success");
  }
  const handleCopy= ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied to clipboard","success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed","success");
  }

  const handleOnChange= (event)=>{
    setText(event.target.value);
  }
 
  const [text,setText] = useState("");
  return (
    <>
      <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy To Clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>


    </>
  )
}

