import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const [word, setWord] = useState(0);

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to Uppercase', 'secondary')
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        console.log('Handle On Change Called');
        setText(event.target.value);
        handleWordCounter(event);
    }

    const handleDownload = () => {
        const a1 = document.getElementById('down');
        const blob1 = new Blob([text], {type:"text/plain"});
        a1.href = URL.createObjectURL(blob1);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    const handleClear = () => {
        setText('');
        setWord(0);
    }

    const handleWordCounter = (e) => {
        let arr = e.target.value.split(/\s+/);
        let u = arr.filter(el => el !== '')
        setWord(u.length);
    }

    return (
        <>  
            <div className="container" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0? true: false} className={`btn btn-${props.customTh} mx-2 my-1`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0? true: false} className={`btn btn-${props.customTh} mx-2 my-1`} onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0? true: false} id="down" className={`btn btn-${props.customTh} mx-2 my-1`} download="myFile.pdf" onClick={handleDownload}>Download</button>
                <button disabled={text.length === 0? true: false} className={`btn btn-${props.customTh} mx-2 my-1`} onClick={handleCopy}>Copy to clipboard</button>
                <button disabled={text.length === 0? true: false} className={`btn btn-${props.customTh} mx-2 my-1`} onClick={handleClear}>Clear</button>
            </div>
            <div className="container" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
                <h1>Your text summary</h1>
                <p> {word} words and {text.length} characters.</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something to preview it here'}</p>
            </div>
        </>
    )
}

TextForm.prototype = {
    heading: PropTypes.string,
}

TextForm.defaultProps = {
    heading : 'Default heading for Analysis'
}