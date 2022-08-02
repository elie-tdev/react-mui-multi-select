import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { MultiSelect } from '..'
import { top100Films, Film } from './multiselect.layout.test'

describe('Dropdown', () => {
  it('value should be updated on change', () => {
    function MultiSelectWrapper() {
      const [value, setValue] = React.useState<Film[]>([])
      const onChange = (e: Film[]) => {
        setValue(e)
      }
      return (
        <MultiSelect
          value={value}
          options={top100Films}
          getOptionLabel={(u: Film) => u.title}
          label="Films"
          placeholder="Braveheart"
          onChange={onChange}
          getOptionKey={(u: Film) => u.title}
        />
      )
    }

    const { getByRole } = render(<MultiSelectWrapper />)
    const element = getByRole('combobox', { name: 'Films' })
    fireEvent.focus(element)
    fireEvent.change(element, { target: { value: 'The Godfather' } })
    expect(element.getAttribute('value')).toBe('The Godfather')
  })
})
