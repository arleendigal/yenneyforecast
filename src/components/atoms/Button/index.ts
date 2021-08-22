import Button from '@material-ui/core/Button'
import styled from 'styled-components'

export const StyledButton = styled(Button)`
  border-radius: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(3)};
  min-width: ${({ theme }) => theme.spacing(15)};
`
export default StyledButton
