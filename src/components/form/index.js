import React, { useState } from 'react';


import './form.scss';

function Form(props) {

    const [body,setBody] = useState(false);
    const [postData,setPostData] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = {
            method: e.target[0].value,
            url: e.target[1].value,
            body:postData
        };
        console.log(formData); 
        props.handleApiCall(formData);
    }
    const sendBody = (e) => {
        let body = document.getElementById("body").value;
        // console.log({body});
        setPostData(body);
    }
    const textArea = (e) => {
        e.target.value == 'POST' || e.target.value == 'PUT'
            ? setBody(true)
            : setBody(false);
        // console.log(body);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="methods">
                    <select onChange={textArea} id="methods">
                        <option data-testid="GET" value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                </label>
                <label >
                    <input data-testid='input' name='url' type='text' required placeholder='URL'/>
                </label>
                <button data-testid='btn'type="submit">GO!</button>
            </form>
            {body
                ? <div id='text-body'>
                        <span>
                            Body</span>
                        <textarea id='body' onInput={sendBody}></textarea>
                    </div>

                : null}
        </>
    );
}

export default Form;
