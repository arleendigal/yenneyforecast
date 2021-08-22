import React from 'react'
import FreeSolo from '@components/atoms/Freesolo'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import SimpleCard from '@components/atoms/SimpleCard'

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Grid container direction="row" justifyContent="center">
        <Grid container>
          <FreeSolo />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <SimpleCard />
        </Grid>
        <Grid item xs>
          <SimpleCard />
        </Grid>
        <Grid item xs>
          <SimpleCard />
        </Grid>
      </Grid>
    </Container>
  )
}
export default Home
