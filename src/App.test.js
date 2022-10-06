import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tang tang tang, tanng tang tang tang tang tang/i);
  expect(linkElement).toBeInTheDocument();
});
