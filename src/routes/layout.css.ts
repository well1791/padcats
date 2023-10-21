import { style, globalStyle } from '@vanilla-extract/css';
import type { StyleRule } from '@vanilla-extract/css';

import { container as headerContainer } from '~/ui/organism/header/styles.css'
import { container as footerContainer } from '~/ui/organism/footer/styles.css'
import { vars } from '~/theme'

const baseContainer: StyleRule = {
  maxInlineSize: vars.size.prose,
  marginInline: 'auto',
}

export const container = style(baseContainer)

globalStyle(`.${headerContainer}`, baseContainer)

globalStyle(`.${footerContainer}`, {
  position: 'fixed',
  insetBlockEnd: 0,
})
