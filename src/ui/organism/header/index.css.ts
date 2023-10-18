import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  gap: '.94rem',
  alignItems: 'center',

  paddingBlockStart: '1.88rem',
  paddingBlockEnd: '1.25rem',
})

export const backLink = style({
  paddingInline: '1.25rem',
  paddingBlock: '.94rem',
})
