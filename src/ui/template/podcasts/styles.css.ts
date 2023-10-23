import { globalStyle, style } from '@vanilla-extract/css'
import type { StyleRule } from '@vanilla-extract/css'

import { thumbnail, author } from '~/ui/molecule/playerInfo/styles.css'
import { vars } from '~/theme'
import { cc, cs } from '~/utils'

const borderLine = `1px solid ${vars.color.secondary.bg}`

export const table = style({
  borderCollapse: 'collapse',

  display: 'grid',
  gridTemplateColumns: cs('45rem', 'auto', '210rem', '130rem'),

  paddingBlockEnd: '20rem',
  borderBlockEnd: borderLine,
})

const allCells: StyleRule = {
  textAlign: 'left',

  ':first-child': {
    textAlign: 'center',
    justifyContent: 'center',
  },
}

export const th = style([allCells, {
  paddingBlockEnd: '5rem',

  fontWeight: 600,
  fontSize: '14rem',
  lineHeight: '17.5rem',
  color: vars.color.secondary.text,
}])

const tdCells: StyleRule = {
  display: 'flex',
  alignItems: 'center',

  paddingBlockStart: '17rem',
  marginBlockStart: '19rem',
  borderBlockStart: borderLine,
}

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
  color: vars.color.secondary.text,
}])
export const colReleasedAt = style([allCells, tdCells, {
  color: vars.color.secondary.text,
}])

globalStyle(`${table} ${colPlayerInfo} ${thumbnail}`, {
  borderRadius: '8px',
})

globalStyle(`${table} ${colPlayerInfo} ${author}`, { fontSize: '14rem' })

globalStyle(cc(
  `${table} thead`,
  `${table} tbody`,
  `${table} tr`,
), { display: 'contents' })

globalStyle(cc(`${table} td + td`, `${table} th + th`), {
  paddingInline: '10rem',
})
