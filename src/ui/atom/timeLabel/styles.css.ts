import { style, createVar, fallbackVar } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const colorVar = createVar()

const _colorVar = createVar()

export const container = style({
  vars: {
    [_colorVar]: fallbackVar(colorVar, vars.color.primary.text)
  },
  color: _colorVar,
  fontWeight: 500,
  minInlineSize: '50rem',
})
