import { createVar, style, globalStyle } from '@vanilla-extract/css'

// import { defaultThumbnailSizeVar } from '~/ui/molecule/playerInfo/styles.css'
import { container as action } from '~/ui/atom/action/styles.css'
import { vars, fluidUnit } from '~/theme'
import { cc } from '~/utils'

const footerHeight = fluidUnit('100rem', ['xl', '110rem'])

const _iconSizeVar = createVar()

export const container = style({
  maxInlineSize: vars.size.prose,
  marginInline: 'auto',
})

export const header = style([container])

export const footer = style({
  position: 'fixed',
  insetBlockEnd: 0,
  height: footerHeight,
})

export const footerBackdrop = style({
  width: '100%',
  height: `calc(${footerHeight} + 50rem)`,
})

globalStyle(cc(
  `${header} svg`,
  `${footer} ${action} > svg`,
), {
  vars: { [_iconSizeVar]: '24rem' },

  width: _iconSizeVar,
  height: _iconSizeVar,
})
