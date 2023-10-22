import { globalStyle } from '@vanilla-extract/css'

import { vars } from './theme.css'
import { cc } from '~/utils'

globalStyle('html', {
  background: cc(
    'linear-gradient(0deg, rgba(10, 10, 10, 0.20) 0%, rgba(10, 10, 10, 0.20) 100%)',
    'linear-gradient(132deg, #1B1B1B 0%, #14151F 88.91%)',
  ),
  color: vars.color.primary.text,
  fontFamily: vars.font.primary,
  fontSize: '6.25%',
})

globalStyle('body', {
  fontSize: '16rem',
})
