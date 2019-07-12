import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  afterEach(cleanup);
  it('should render a h2 with correct title', () => {
    const { container } = render(<App />);
    const h2 = container.firstChild.firstChild;
    expect(h2.textContent).toBe('Hooks Testing - 101');
  });

  it('should display count initialized to 0', () => {
    const { container } = render(<App />);
    const h2 = container.firstChild.childNodes[1];
    const btn = container.firstChild.childNodes[2];
    expect(h2.textContent).toBe('Counter - 0');

    fireEvent.click(btn);
    expect(h2.textContent).toBe('Counter - 1');

    fireEvent.click(btn);
    expect(h2.textContent).toBe('Counter - 2');
  });

  it('should increment the counter', () => {
    const { container } = render(<App />);
    const h2 = container.firstChild.childNodes[1];
    const btn = container.firstChild.childNodes[2];
    expect(h2.textContent).toBe('Counter - 0');

    fireEvent.click(btn);
    expect(h2.textContent).toBe('Counter - 1');

    fireEvent.click(btn);
    expect(h2.textContent).toBe('Counter - 2');
  });

  it('should draw a button', () => {
    const { container } = render(<App />);
    const button = container.firstChild.childNodes[2];
    expect(button.textContent).toBe('Increment Count');
  });
});
