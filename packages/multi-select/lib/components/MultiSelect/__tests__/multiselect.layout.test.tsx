import React from 'react'
import { render } from '@testing-library/react'
import { MultiSelect } from '..'

export type Film = {
  title: string
  year: number
}

export const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
]

describe('MultiSelect', () => {
  it('should render successfully: ', () => {
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

    const { container } = render(<MultiSelectWrapper />)
    expect(container).toMatchSnapshot()
    expect(container).toBeTruthy()
  })
})
