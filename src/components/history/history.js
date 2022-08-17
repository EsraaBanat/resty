import React, { useState } from 'react'

 function History(props) {
    // console.log('gggggggg',props.history);
    // console.log('gggggggg',props.methodUrl);
    const [result,showResult]=useState(false)
    return (
        <div id='history'>
            <h1>History</h1>
            {props.history
                ? props
                    .history
                    .map((x, index) => {
                        return (
                            <div key={index}>
                                <h4>Method : {x.method}</h4>
                                <h4>URL : {x.url}</h4>
                                <button onClick={()=>{showResult(!result)}}>Show Results</button>
                                {result?<h5>Results : {JSON.stringify(x.results, undefined, 2)}</h5>:null}
                                <hr/>
                            </div>
                        );
                    })
                : null}
            <button onClick={props.handleClear}>Clear All</button>
        </div>
    )
 }

export default History;

