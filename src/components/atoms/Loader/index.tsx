import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { StyledBackdrop } from './style'

export interface LoaderProps {
  open?: boolean
}

const Loader: React.FC<LoaderProps> = ({ open = false }) => (
  <StyledBackdrop open={open}>
    <CircularProgress color="inherit" />
  </StyledBackdrop>
)

export default Loader
