import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';

test('рендер компонента App', async () => {
  await act(async () => {
    render(<App />);
  });
});
