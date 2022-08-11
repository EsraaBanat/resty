import React from 'react';
import './result.scss'

function Results(props) {
  console.log(props.result);
    return (
      <section>
        <pre>{props.result ? JSON.stringify(props.result, undefined, 2) : null}</pre>
      </section>
    );

}

export default Results;
