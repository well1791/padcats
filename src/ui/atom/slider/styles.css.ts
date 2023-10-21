import { style, createVar, fallbackVar } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const sliderWidth = createVar()
const _sliderWidth = createVar()

export const root = style({
  vars: {
    [_sliderWidth]: fallbackVar(sliderWidth, '200rem'),
  },
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  width: _sliderWidth,
  height: '35rem',

  userSelect: 'none',
  touchAction: 'none',
})

export const track = style({
  flexGrow: 1,

  position: 'relative',

  borderRadius: '9999px',
  height: '5rem',
  backgroundColor: vars.color.secondary.text,

  cursor: 'pointer',
  transition: 'transform 250ms linear',

  ':hover': {
    transform: 'scaleY(1.6)'
  }
})

export const range = style({
  position: 'absolute',

  height: '100%',
  backgroundColor: 'white',
  borderRadius: '9999px',
})
