import { createVar, style, globalStyle } from '@vanilla-extract/css';
import type { StyleRule } from '@vanilla-extract/css';

import { container as searchLabel } from '~/ui/molecule/searchBox/styles.css'
import { container as action } from '~/ui/atom/action/styles.css'
import { container as header } from '~/ui/organism/header/styles.css'
import { container as footer } from '~/ui/organism/footer/styles.css'
import { vars } from '~/theme'
import { cc } from '~/utils'

const _iconSize = createVar()

const baseContainer: StyleRule = {
  maxInlineSize: vars.size.prose,
  marginInline: 'auto',
}

const iconSizing: StyleRule = {
  vars: { [_iconSize]: '24rem' },

  width: _iconSize,
  height: _iconSize,
}

export const container = style(baseContainer)

globalStyle(`${header}`, baseContainer)
globalStyle(cc(
  `${header} ${action} > svg`,
  `${header} ${searchLabel} > svg`
), iconSizing)

globalStyle(`${footer}`, {
  position: 'fixed',
  insetBlockEnd: 0,
})
globalStyle(`${footer} ${action} > svg`, iconSizing)
