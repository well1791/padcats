import { style, globalStyle } from '@vanilla-extract/css';
import type { StyleRule } from '@vanilla-extract/css';

import { container as headerContainer } from '~/ui/organism/header/index.css'
import { container as footerContainer } from '~/ui/organism/footer/index.css'
import { vars } from '~/css'

const baseContainer: StyleRule = {
  maxWidth: vars.bp.content,
  marginInline: 'auto',
}

export const container = style(baseContainer)

globalStyle(`.${headerContainer}`, baseContainer)

globalStyle(`.${footerContainer}`, {
  position: 'fixed',
  insetBlockEnd: 0,
})
