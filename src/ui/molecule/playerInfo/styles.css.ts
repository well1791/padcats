import { style, createVar, fallbackVar } from '@vanilla-extract/css'

import { vars, fluidUnit } from '~/theme'

export const thumbnailSizeVar = createVar()
const _thumbnailSizeVar = createVar()

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20rem',
})

export const thumbnail = style({
  vars: {
    [_thumbnailSizeVar]: fallbackVar(
      thumbnailSizeVar,
      fluidUnit('100rem', ['xl', '110rem'])
    ),
  },

  width: _thumbnailSizeVar,
  height: _thumbnailSizeVar,
  backgroundColor: 'red',
})

export const title = style({
  fontWeight: 500,
})

export const author = style([title, {
  color: vars.color.secondary.text,
}])
