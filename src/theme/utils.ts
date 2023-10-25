import tokens from './tokens'

type Breakpoint = keyof typeof tokens.bp

const isBp = (bp: string): bp is Breakpoint => bp in tokens.bp

const unitCond = (bp: Breakpoint | string) =>
  `(100vw - ${isBp(bp) ? tokens.bp[bp] : bp} + 1rem) * 1000`

// taken from: https://css-tricks.com/responsive-layouts-fewer-media-queries/#aa-more-tricks
export const length = (
  init: string,
  ...bps: Array<[Breakpoint, string]>
) => bps.reduce((z, [bp, val]) => `clamp(${z}, ${unitCond(bp)}, ${val})`, init)
