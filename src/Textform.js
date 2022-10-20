
import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+ text)
        // console.log(text)
        let newtext = text.toUpperCase();
        // setText("You have clicked on HandleUp click")
        setText(newtext)
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked"+ text)
        // console.log(text)
        let newtext = text.toLowerCase();
        // setText("You have clicked on HandleUp click")
        setText(newtext)
        props.showAlert("Converted to Lowercase","success");

    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleCopy = () => {
        // console.log("I am copy");
        // var text = document.getElementById("myBox");
        // text.select();
        // text.setSelectionRange(0, 9999);
        // text.select(); 
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState(' ')
    return (
        <>
        <div className='container'>
            <h1>Analyse the text- </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        
        <div className="container" >
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            
            <p> You have {text.split(" ").length} Words and {text.length} Characters</p>
            
            <h2>Preview</h2>
            <p>{text} </p>

        </div>

        </>


    )
}
