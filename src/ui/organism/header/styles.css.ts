import { style } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const container = style({
  display: 'flex',
  gap: '15rem',
  alignItems: 'center',

  blockSize: '50rem',
  paddingBlockStart: '30rem',
  paddingBlockEnd: '20rem',
})

export const backLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  minInlineSize: '50rem',
  minBlockSize: '50rem',
  borderRadius: 15,
  backgroundColor: vars.color.tertiary.bg,
})
