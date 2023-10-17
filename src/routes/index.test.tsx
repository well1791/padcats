import { render, screen } from '@testing-library/react';

import RootPage from '.';

test('renders', () => {
  render(<RootPage />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});
