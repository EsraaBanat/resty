import React from 'react';
import './result.scss'

function Results(props) {
  console.log("at result",props.result);
    return (
      <section data-testid='results'>
        <pre>{props.result ? JSON.stringify(props.result, undefined, 2) : null}</pre>
      </section>
    );
}

export default Results;
