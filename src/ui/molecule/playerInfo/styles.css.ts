import { style, createVar } from '@vanilla-extract/css'

import { vars } from '~/theme'

const thumbnailSize = createVar()

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20rem',

  inlineSize: '27%',
})

export const thumbnail = style({
  vars: {
    [thumbnailSize]: '110rem',
  },
  width: thumbnailSize,
  height: thumbnailSize,
  backgroundColor: 'red',
})

export const title = style({
  fontWeight: 500
})

export const description = style({
  color: vars.color.secondary.text,
})
