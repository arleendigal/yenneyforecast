/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { getSuggestedPlaces } from '@api/weatherService'

interface Places {
  country: string
  id: number
  name: string
  region: string
  url: string
}
const FreeSolo: React.FC = () => {
  const [places, setPlaces] = useState<Places[]>([])
  const getPlaces = async (input: string) => {
    if (input?.length > 2) {
      const response = await getSuggestedPlaces(input)
      setPlaces(response.data)
      console.log('response: %o ', response.data)
    }
  }

  // mount

  return (
    <div style={{ width: '100%' }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={places}
        getOptionLabel={(option) => option.name} // selected item
        renderOption={(option) => (
          <>
            {option.name} ({option.id.toString()})
          </>
        )} // dropdown results
        filterOptions={(options) => options}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(e) => {
              console.log(e)
              getPlaces(e.target.value)
              // console.log(e.target.value)
            }}
            label="Search city"
            placeholder="Enter a city to view a 3-day forecast"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  )
}

export default FreeSolo
