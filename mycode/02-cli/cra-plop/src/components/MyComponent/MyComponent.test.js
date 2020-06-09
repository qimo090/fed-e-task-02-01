import React from 'react'
import { render } from '@testing-library/react'
import MyComponent from './MyComponent'

test('renders learn react link', () => {
  const { getByText } = render(<MyComponent />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
