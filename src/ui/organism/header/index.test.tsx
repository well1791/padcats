import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import Header from '.'

describe('Header content', () => {
  test('it has a "search" input text', () => {
    render(<Header />)
    expect(screen.queryAllByLabelText('go to the main page')).toHaveLength(0)
    expect(screen.queryAllByPlaceholderText('podcast')).toHaveLength(1)
  })

  test('it has a back link', () => {
    const router = createMemoryRouter(
      [{ path: '/', element: <Header showBackLink />, }],
      { initialEntries: ['/'], initialIndex: 0, },
    );
    render(<RouterProvider router={router} />)
    expect(screen.queryAllByLabelText('go to the main page')).toHaveLength(1)
  })
})
