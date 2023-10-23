import { style, createVar, fallbackVar } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const titleMaxWidthVar = createVar()
const _titleMaxWidthVar = createVar()

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20rem',

  height: '100%',
})

export const thumbnail = style({
  height: '100%',
  aspectRatio: '1 / 1',
  backgroundColor: 'red', // TODO: REMOVE
})

export const title = style({
  vars: {
    [_titleMaxWidthVar]: fallbackVar(titleMaxWidthVar, '200rem'),
  },

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: _titleMaxWidthVar,
  fontWeight: 500,
})

export const author = style([title, {
  color: vars.color.secondary.text,
}])
