import styled from 'styled-components'
import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  h1 {
    padding: ${({ theme }) => theme.spacing(1)};
    font-size: ${({ theme }) => theme.spacing(3)};
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`
