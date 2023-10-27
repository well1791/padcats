import { style, createVar, fallbackVar } from '@vanilla-extract/css'

import * as vars from './vars.css'
import theme from '~/theme'

const _width = createVar()
const _thumbSize = createVar()
const _transition = createVar()

export const root = style({
  vars: {
    [_width]: fallbackVar(vars.width, '100rem'),
    [_transition]: 'transform 200ms linear',
  },
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  inlineSize: _width,
  blockSize: '5rem',

  userSelect: 'none',
  touchAction: 'none',
})

export const track = style({
  flexGrow: 1,

  position: 'relative',

  borderRadius: '9999px',
  height: '100%',
  backgroundColor: theme.color.secondary.text,

  cursor: 'pointer',
  transition: _transition,

  [`.${root}:hover &`]: {
    transform: 'scaleY(1.3)'
  }
})

export const range = style({
  position: 'absolute',

  height: '100%',
  backgroundColor: 'white',
  borderRadius: '9999px',
})

export const thumb = style({
  vars: {
    [_thumbSize]: '10rem',
  },

  display: 'block',
  width: _thumbSize,
  height: _thumbSize,
  backgroundColor: theme.color.primary.text,
  borderRadius: '50%',

  cursor: 'pointer',
  transition: _transition,

  [`.${root}:hover &`]: {
    transform: 'scale(1.3)',
  },

  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 5px rgb(255 255 255 / 0.4)`,
  },
})
