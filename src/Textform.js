import React, { useState } from 'react'



export default function Textform(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase","success");

    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState(' ')
    return (
        <>
        <div className='container mt-5'>
            <h1 className='text-center my-3'>Text-Master( Edit your text here) </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-3 col-md-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3 col-md-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3 col-md-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-3 col-md-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3 col-md-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            
            
            <h2>Preview</h2>
            <p>{text} </p>

        </div>

        </>


    )
}
