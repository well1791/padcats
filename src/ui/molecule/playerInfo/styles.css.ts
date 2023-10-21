import { style, createVar } from '@vanilla-extract/css'

import { vars } from '~/theme'
import { fromBpVars } from '~/theme/utils'

const _thumbnailSize = createVar()

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20rem',
})

export const thumbnail = style({
  vars: { [_thumbnailSize]: '100rem' },

  width: _thumbnailSize,
  height: _thumbnailSize,
  backgroundColor: 'red',

  '@media': fromBpVars('xl', { [_thumbnailSize]: '110rem' }),
})

export const title = style({
  fontWeight: 500,
})

export const description = style({
  color: vars.color.secondary.text,
})
