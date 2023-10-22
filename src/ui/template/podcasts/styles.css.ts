import { globalStyle, style } from '@vanilla-extract/css'

import {
  thumbnail,
  author,
  thumbnailSizeVar,
} from '~/ui/molecule/playerInfo/styles.css'

export const container = style({})

export const playerInfo = style({})

globalStyle(`${container} ${playerInfo} ${thumbnail}`, {
  vars: { [thumbnailSizeVar]: '45rem' },
  borderRadius: '8px',
})

globalStyle(`${container} ${playerInfo} ${author}`, {
  fontSize: '14rem',
})
