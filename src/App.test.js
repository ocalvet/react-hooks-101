import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  afterEach(cleanup);
  it('should render a h2 with correct title', () => {
    const { container } = render(<App />);
    const h2 = container.firstChild.firstChild;
    expect(h2.textContent).toBe('Hooks Testing - 101');
  });
});
