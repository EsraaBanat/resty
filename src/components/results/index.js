import React from 'react';
import './result.scss';
// import JSONPretty from 'react-json-pretty';
// import 'react-json-pretty/themes/monikai.css';

function Results(props) {
  console.log("at result",props.result);
    return (
      <section data-testid='results'>
        <pre>{props.result ? JSON.stringify(props.result, undefined, 2) : null}</pre>
      </section>
    );
}

export default Results;
