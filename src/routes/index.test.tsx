import { render, screen } from '@testing-library/react';

import Root from '.';

test('renders', () => {
  render(<Root />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});
