import { style, createVar, fallbackVar } from '@vanilla-extract/css'

import * as vars from './vars.css'
import theme from '~/theme'

const _thumbnailBorder = createVar()
const _titleMaxWidth = createVar()
const _authorFontSize = createVar()

export const container = style({
  vars: {
    [_thumbnailBorder]: fallbackVar(vars.thumbnailBorder, '0'),
    [_titleMaxWidth]: fallbackVar(vars.titleMaxWidth, '200rem'),
    [_authorFontSize]: fallbackVar(vars.authorFontSize, '16rem'),
  },

  display: 'flex',
  alignItems: 'center',
  gap: '20rem',

  height: '100%',
})

export const thumbnail = style({
  borderRadius: 0,
  height: '100%',
  aspectRatio: '1 / 1',
  backgroundColor: 'red', // TODO: REMOVE
})

export const title = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: _titleMaxWidth,
  fontWeight: 500,
})

export const author = style([title, {
  color: theme.color.secondary.text,
}])
