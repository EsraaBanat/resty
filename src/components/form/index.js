import React, {useState} from 'react';

import './form.scss';

function Form(props) {

    const [body,
        setBody] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = {
            method: e.target[0].value,
            url: e.target[1].value
        };
        // console.log(e.target[2].value); console.log('EEEEEEEE',e);
        props.handleApiCall(formData);
        let url = 'https://reqres.in/api/posts';
        let response = await fetch(url, {
            method: formData.method,
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let data = await response.json();
        props.setResult(data);
        console.log(data);
        // e.target[0].value = null;
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
                        <textarea></textarea>
                    </div>

                : null}
        </>
    );
}

export default Form;
