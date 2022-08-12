import React from "react";
import {
    render,
    fireEvent,
    waitFor,
    screen
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';
// import Results from '../components/results/index';
// import Form from '../components/form/index';

beforeEach(() => {
  render(<App />);
})

test('Load App and Display header', async () => {
  const header = await waitFor(() => screen.getByTestId('header'));
  expect(header).toBeInTheDocument();
})

test('testing if the default state for method is GET ', async () => {
    const GET = await waitFor(() => screen.getByTestId("GET"));
    expect(GET).toHaveTextContent('GET');
});
