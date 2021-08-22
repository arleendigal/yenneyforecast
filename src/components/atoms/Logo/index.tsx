import React from 'react'
import { Wrapper } from './style'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'

export interface LogoProps {
  link?: string
}

const Logo: React.FC<LogoProps> = ({ link }) => {
  return (
    <Wrapper>
      <Link href={link ?? '/'} passHref>
        <Typography variant="h4" component="a">
          {process.env.NEXT_PUBLIC_BASE_TITLE}.
        </Typography>
      </Link>
    </Wrapper>
  )
}

export default Logo
