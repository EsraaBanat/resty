import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

    const [data,
        setData] = useState({data: null, requestParams: {}})

    const [result,
        setResult] = useState({})
        // console.log('kkkkkkkkkkk',result);
    
    useEffect(() => {
        if (data.requestParams.method == 'GET') {
            axios.get(data.requestParams.url)
            .then(res => {
                setResult(res.data.results);
          }).catch((e) => {
              console.log(e);
              setResult({stauts:"Sorry Something went wrong"})
          });
        }
        if (data.requestParams.method == 'POST') {
                axios.post(data.requestParams.url,data.requestParams.body)
                .then(res => {
                    // console.log('rrrrrrrr',res);
                    setResult(res);
              }).catch((e) => {
                  console.log(e);
                  setResult({stauts:"Sorry Something went wrong"})
              });
        }
        if (data.requestParams.method == 'PUT') {
                axios.post(data.requestParams.url,data.requestParams.body)
                .then(res => {
                    // console.log('rrrrrrrr',res);
                    setResult(res);
              }).catch((e) => {
                  console.log(e);
                  setResult({stauts:"Sorry Something went wrong"})
              });
        }
        if (data.requestParams.method == 'DELETE') {
                axios.post(data.requestParams.url)
                .then(res => {
                    // console.log('rrrrrrrr',res);
                    setResult({stauts:"Deleted Successfuly"});
              }).catch((e) => {
                  console.log(e);
                  setResult({stauts:"Sorry Something went wrong"})
              });
        }
    },[data])

    function callApi(formData) {
        setData({
            ...data,
            data:result,
            requestParams:formData
        })
        console.log('TTT',result);
    }
    // console.log(result);

    return (
        <React.Fragment>
            <Header/>
            <Form handleApiCall={callApi} setResult={setResult}/>
            <div id='body'>
                <div id={result?'method':null}>
                    <div>{data.requestParams.method}</div>
                    <div>{data.requestParams.url}</div>
                </div>
                <Results result={result}/>
            </div>
            <Footer/>
        </React.Fragment>
    );

}

export default App;
