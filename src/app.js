import React, {useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import { BrowserRouter ,
  Routes,
  Route,
  useRoutes,} from "react-router-dom";
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/history';

function historyReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'ADD_HISTORY':
            console.log('state.history', state);
            const history = [
                ...state,
                payload
            ];
            console.log('history', history);
            return history;
        case 'CLEAR_HISTORY':
            return initialState;
        default:
            return state;
    }
}

const addAction = (payLoad) => {
    return {type: 'ADD_HISTORY', payload: payLoad};
};

const clearAction = () => {
    return {type: 'CLEAR_HISTORY', payload: ''};
};

const initialState = [];

function App() {

    const [data,
        setData] = useState({data: null, requestParams: {}})

    const [result,
        setResult] = useState()
    // console.log('kkkkkkkkkkk',result);
    const [state,
        dispatch] = useReducer(historyReducer, initialState)
    
    useEffect(() => {
        if (data.requestParams.method == 'GET') {
            axios
                .get(data.requestParams.url)
                .then(res => {
                    setResult(res);
                })
                .catch((e) => {
                    console.log(e);
                    setResult({stauts: "Sorry Something went wrong"})
                });
        }
        if (data.requestParams.method == 'POST') {
            axios
                .post(data.requestParams.url, data.requestParams.body)
                .then(res => {
                    // console.log('rrrrrrrr',res);
                    setResult(res);
                })
                .catch((e) => {
                    console.log(e);
                    setResult({stauts: "Sorry Something went wrong"})
                });
        }
        if (data.requestParams.method == 'PUT') {
            axios
                .post(data.requestParams.url, data.requestParams.body)
                .then(res => {
                    // console.log('rrrrrrrr',res);
                    setResult(res);
                })
                .catch((e) => {
                    console.log(e);
                    setResult({stauts: "Sorry Something went wrong"})
                });
        }
        if (data.requestParams.method == 'DELETE') {
            axios
                .post(data.requestParams.url)
                .then(res => {
                    // console.log('rrrrrrrr',res);
                    setResult({stauts: "Deleted Successfuly"});
                })
                .catch((e) => {
                    console.log(e);
                    setResult({stauts: "Sorry Something went wrong"})
                });
        }

    }, [data])

    useEffect(() => {
        if (result) {
            // console.log('TTT', result.length);
            dispatch(addAction({method: data.requestParams.method, url: data.requestParams.url, results: result}));
            // console.log('sssssssss',state)
            // console.log('sssssssss',data.requestParams.method)
            // console.log('sssssssss',data.requestParams.url)
            // console.log('sssssssss',result)
        }
    }, [result, data])

    function handleClear(e) {
        e.preventDefault();
        dispatch(clearAction());
    }

    function callApi(formData) {
        setData({
            ...data,
            data: result,
            requestParams: formData
        })
    }
    // console.log('uououo', state);

    return (
        <React.Fragment>
            <Header/>
            <Form handleApiCall={callApi} setResult={setResult}/>
            <div id='body'>
                <div id={result
                    ? 'method'
                    : null}>
                    <div>{data.requestParams.method}</div>
                    <div>{data.requestParams.url}</div>
                </div>
                <Results result={result}/>
            {result?<History handleClear={handleClear} history={state}/>:null}
            </div>
            <Footer/>
        </React.Fragment>
    );

}

export default App;
