import { style, createVar, fallbackVar } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const sliderWidth = createVar()
const _sliderWidth = createVar()

const _thumbSize = createVar()

export const root = style({
  vars: {
    [_sliderWidth]: fallbackVar(sliderWidth, '200rem'),
  },
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  width: _sliderWidth,
  height: '5rem',

  userSelect: 'none',
  touchAction: 'none',
})

export const track = style({
  flexGrow: 1,

  position: 'relative',

  borderRadius: '9999px',
  height: '100%',
  backgroundColor: vars.color.secondary.text,

  cursor: 'pointer',
  transition: 'transform 250ms linear',

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
  backgroundColor: vars.color.primary.text,
  borderRadius: '50%',

  cursor: 'pointer',
  transition: 'transform 250ms linear',

  [`.${root}:hover &`]: {
    transform: 'scale(1.3)',
  },

  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 5px rgb(255 255 255 / 0.4)`,
  },
})
