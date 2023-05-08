import React, { useState } from 'react'

export default function TexthtmlForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success');
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text summery</h2>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(' ').length} <b>words</b> and {text.length} <b>character</b></p>
                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Text preview</h2>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text}</p>
            </div>
        </>
    )
}
