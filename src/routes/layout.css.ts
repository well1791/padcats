import { createVar, style, globalStyle } from '@vanilla-extract/css';
import type { StyleRule } from '@vanilla-extract/css';

import { container as searchLabel } from '~/ui/molecule/searchBox/styles.css'
import { container as action } from '~/ui/atom/action/styles.css'
import { container as header } from '~/ui/organism/header/styles.css'
import { container as footer } from '~/ui/organism/footer/styles.css'
import { vars } from '~/theme'

const iconSize = createVar()

const baseContainer: StyleRule = {
  maxInlineSize: vars.size.prose,
  marginInline: 'auto',
}

const iconSizing: StyleRule = {
  vars: { [iconSize]: '24rem' },

  width: iconSize,
  height: iconSize,
}

export const container = style(baseContainer)

globalStyle(`.${header}`, baseContainer)
globalStyle([
  `.${header} .${action} > svg`,
  `.${header} .${searchLabel} > svg`
].join(', '), iconSizing)

globalStyle(`.${footer}`, {
  position: 'fixed',
  insetBlockEnd: 0,
})
globalStyle(`.${footer} .${action} > svg`, iconSizing)
