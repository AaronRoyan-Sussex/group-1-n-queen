import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chessboard', () => {
  render(<App />);
  const linkElement = screen.getByTestId('todo-1'); // Use queryByTestId to avoid exceptions
  if (linkElement) {
    expect(linkElement).toBeInTheDocument();
  } else {
    throw new Error('Element with data-testid not found.');
  }
});

describe('Button Pressed', () => {
  it('')
})
