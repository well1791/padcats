import { globalStyle, style } from '@vanilla-extract/css'

import { thumbnail, author, thumbnailSizeVar } from '~/ui/molecule/playerInfo/styles.css'

export const container = style({})

export const infoRow = style({})

globalStyle(`${container} ${infoRow} ${thumbnail}`, {
  vars: { [thumbnailSizeVar]: '45rem' },
  borderRadius: '8px',
})

globalStyle(`${container} ${infoRow} ${author}`, {
  fontSize: '14rem',
})
