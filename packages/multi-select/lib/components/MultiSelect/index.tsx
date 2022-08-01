import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export type MultiSelectProps<T> = {
  getOptionLabel: (value: T) => string
  getOptionKey: (value: T) => string
  options: Readonly<T[]>
  limitTags?: number
  label?: string
  placeholder?: string
  value: T[]
  onChange: (value: T[]) => void
}

export function MultiSelect<T>(props: MultiSelectProps<T>) {
  const {
    onChange,
    value,
    limitTags = 4,
    options,
    getOptionLabel,
    getOptionKey,
    label,
    placeholder,
  } = props
  return (
    <Box
      sx={{
        width: '100%',
        '& div': {
          display: 'flex',
          gap: 1,
        },
      }}
    >
      <Autocomplete
        multiple
        style={{ width: '100%' }}
        limitTags={limitTags}
        options={options}
        getOptionLabel={option => getOptionLabel(option)}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={getOptionKey(option)}>
            {getOptionLabel(option)}
          </Box>
        )}
        value={value}
        onChange={(_: any, newValues: T[]) => {
          onChange(newValues)
        }}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </Box>
  )
}
