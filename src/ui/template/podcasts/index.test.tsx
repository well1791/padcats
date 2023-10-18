import { render, screen } from '@testing-library/react'

import Podcasts from '.'

describe('Podcasts template', () => {
  describe('header content', () => {
    test('it has a "search" input text', () => {
      render(<Podcasts data={{ podcasts: [] }} />)
      const elements = screen.getAllByPlaceholderText('podcast')
      expect(elements).toHaveLength(1)
    })
  })

  describe('body content', () => {
    test('it has a "sort by" dropdown', () => {
      render(<Podcasts data={{ podcasts: [] }} />)
      const elements = screen.getAllByLabelText('Order by:')
      expect(elements).toHaveLength(1)
      expect(elements.at(0)).toHaveTextContent('Order by: Name')
    })

    test('it has a table to list podcasts', () => {
      render(<Podcasts data={{ podcasts: [] }} />)
      const elements = screen.getAllByRole('table')
      expect(elements).toHaveLength(1)
    })
  })

  describe('footer content', () => {
    test('it has a media player interface', () => {
      expect(false).toBeTruthy()
    })
  })
})

xdescribe('Podcasts interactions', () => {
  describe('header search', () => {
    test('it request the given text on keyup', () => {
      expect(false).toBeTruthy()
    })

    test('it populates the table', () => {
      expect(false).toBeTruthy()
    })
  })

  describe('"sort by" dropdown', () => {
    test('it sorts the elements of the table by column value', () => {
      expect(false).toBeTruthy()
    })
  })

  describe('table', () => {
    test('it allows to reproduce an element from the list on the footer media player', () => {
      expect(false).toBeTruthy()
    })
  })
})
