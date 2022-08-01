import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { MultiSelect } from '..'
import { top100Films, Film } from '../mockdata'

describe('Dropdown', () => {
  it('value should be updated on change', () => {
    const getOptionLabel = (u: Film) => u.title
    const { getByRole } = render(
      <MultiSelect
        options={top100Films}
        getOptionLabel={getOptionLabel}
        label="Films"
        placeholder="Braveheart"
      />,
    )

    const element = getByRole('combobox', { name: 'Films' })
    fireEvent.focus(element)
    fireEvent.change(element, { target: { value: 'The Godfather' } })
    expect(element.getAttribute('value')).toBe('The Godfather')
  })
})
