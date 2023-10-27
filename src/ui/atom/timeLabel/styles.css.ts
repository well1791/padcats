import { style, createVar, fallbackVar } from '@vanilla-extract/css'

import * as vars from './vars.css'
import theme from '~/theme'

const _color = createVar()

export const container = style({
  vars: {
    [_color]: fallbackVar(vars.color, theme.color.primary.text),
  },
  color: _color,
  fontWeight: 500,
  minInlineSize: '50rem',
})
