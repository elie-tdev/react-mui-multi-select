import React from 'react'
import { render } from '@testing-library/react'
import { MultiSelect } from '..'
import { top100Films, Film } from '../mockdata'

describe('MultiSelect', () => {
  it('should render successfully: ', () => {
    const getOptionLabel = (u: Film) => u.title
    const { container } = render(
      <MultiSelect
        options={top100Films}
        getOptionLabel={getOptionLabel}
        label="Films"
        placeholder="Braveheart"
      />,
    )
    expect(container).toMatchSnapshot()
    expect(container).toBeTruthy()
  })
})
