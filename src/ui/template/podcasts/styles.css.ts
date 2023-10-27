import { style } from '@vanilla-extract/css'
import type { StyleRule } from '@vanilla-extract/css'

import { thumbnailBorder, authorFontSize } from '~/ui/molecule/playerInfo/vars.css'
import theme from '~/theme'
import { cs } from '~/utils'

const borderLine = `1px solid ${theme.color.secondary.bg}`

export const table = style({
  vars: {
    [thumbnailBorder]: '8px',
    [authorFontSize]: '14px',
  },
  borderCollapse: 'collapse',

  display: 'grid',
  gridTemplateColumns: cs('45rem', 'auto', '210rem', '130rem'),

  paddingBlockEnd: '20rem',
  borderBlockEnd: borderLine,
})

export const displayContents = style({ display: 'contents' })

const allCells: StyleRule = {
  paddingInline: '10rem',

  textAlign: 'left',

  ':first-child': {
    textAlign: 'center',
    justifyContent: 'center',
    paddingInline: '3.75rem',
  },
}

export const th = style([allCells, {
  paddingBlockEnd: '5rem',

  fontWeight: 600,
  fontSize: '14rem',
  lineHeight: '17.5rem',
  color: theme.color.secondary.text,
}])

const tdCells: StyleRule = {
  display: 'flex',
  alignItems: 'center',

  paddingBlockStart: '17rem',
  marginBlockStart: '19rem',
  borderBlockStart: borderLine,
}

// COLUMNS

export const colPlayPauseBtn = style([allCells, tdCells, {}])

export const colPlayerInfo = style([allCells, tdCells, {
  height: '45rem',
}])

export const colDescription = style([allCells, tdCells, {
  height: '40rem',
  overflow: 'hidden',
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  color: theme.color.secondary.text,
}])

export const colReleasedAt = style([allCells, tdCells, {
  color: theme.color.secondary.text,
}])
