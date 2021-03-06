import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
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

  it('should draw a increment button', () => {
    const { container } = render(<App />);
    const button = container.firstChild.childNodes[2];
    expect(button.textContent).toBe('Increment Count');
  });

  it('should draw a decrement button', () => {
    const { container } = render(<App />);
    const button = container.firstChild.childNodes[3];
    expect(button.textContent).toBe('Decrement Count');
  });

  it('should draw a hr', () => {
    const { container } = render(<App />);
    const hr = container.firstChild.childNodes[4];
    expect(hr).toMatchSnapshot('<hr />');
  });

  it('should prevent counter for decrementing pass 0', () => {
    const { container } = render(<App />);
    const h2 = container.firstChild.childNodes[1];
    const btnInc = container.firstChild.childNodes[2];
    const btnDec = container.firstChild.childNodes[3];
    expect(h2.textContent).toBe('Counter - 0');

    fireEvent.click(btnInc);
    expect(h2.textContent).toBe('Counter - 1');

    fireEvent.click(btnDec);
    expect(h2.textContent).toBe('Counter - 0');

    fireEvent.click(btnDec);
    expect(h2.textContent).toBe('Counter - 0');
  });
});
