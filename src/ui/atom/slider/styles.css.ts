import { style, createVar, fallbackVar } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const sliderWidthVar = createVar()
const _sliderWidthVar = createVar()

const _thumbSizeVar = createVar()
const _transition = createVar()

export const root = style({
  vars: {
    [_sliderWidthVar]: fallbackVar(sliderWidthVar, '100rem'),
    [_transition]: 'transform 200ms linear',
  },
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  inlineSize: _sliderWidthVar,
  blockSize: '5rem',

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
    [_thumbSizeVar]: '10rem',
  },

  display: 'block',
  width: _thumbSizeVar,
  height: _thumbSizeVar,
  backgroundColor: vars.color.primary.text,
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
