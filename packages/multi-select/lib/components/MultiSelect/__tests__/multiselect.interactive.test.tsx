import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { MultiSelect } from '..'
import { top100Films, Film } from './multiselect.layout.test'

describe('Dropdown', () => {
  it('value should be updated on change', async () => {
    const onChange = jest.fn()
    const { getByRole } = render(
      <MultiSelect
        value={[]}
        options={top100Films}
        getOptionLabel={(u: Film) => u.title}
        label="Films"
        placeholder="Braveheart"
        onChange={onChange}
        getOptionKey={(u: Film) => u.title}
      />,
    )

    const element = getByRole('combobox', { name: 'Films' })
    fireEvent.focus(element)
    fireEvent.change(element, { target: { value: top100Films[1].title } })
    fireEvent.keyDown(element, { key: 'ArrowDown' })
    fireEvent.keyDown(element, { key: 'Enter' })
    expect(onChange).toBeCalledWith([top100Films[1]])
  })
})
