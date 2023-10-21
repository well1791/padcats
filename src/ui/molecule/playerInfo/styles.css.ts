import { style, createVar } from '@vanilla-extract/css'

import { vars } from '~/theme'
import { fromBpVars } from '~/theme/utils'

const thumbnailSize = createVar()

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20rem',

  inlineSize: '35%',
})

export const thumbnail = style({
  vars: { [thumbnailSize]: '100rem' },

  width: thumbnailSize,
  height: thumbnailSize,
  backgroundColor: 'red',

  '@media': fromBpVars('xl', { [thumbnailSize]: '110rem' }),
})

export const title = style({
  fontWeight: 500,
})

export const description = style({
  color: vars.color.secondary.text,
})
