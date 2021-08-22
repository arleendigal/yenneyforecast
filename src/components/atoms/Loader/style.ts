import styled from 'styled-components'
import Backdrop from '@material-ui/core/Backdrop'

export const StyledBackdrop = styled(Backdrop)`
  color: white;
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`
