import tokens from './tokens'

type CSSMeasures = 'rem' | 'em' | 'px' | 'vh' | 'vw' | 'ch' | 'fr' | '%';
type CSSLength = `${number}${CSSMeasures}`
type Breakpoint = keyof typeof tokens.bp
const isBreakpoint = (bp: string): bp is Breakpoint => bp in tokens.bp
const lengthCondition = (bp: Breakpoint | CSSLength) =>
  `(100vw - ${isBreakpoint(bp) ? tokens.bp[bp] : bp} + 1rem) * 1000`

// taken from: https://css-tricks.com/responsive-layouts-fewer-media-queries/#aa-more-tricks
export const length = (
  init: CSSLength,
  ...args: Array<[Breakpoint | CSSLength, string]>
) => args.reduce<string>(
  (z, [bp, val]) => `clamp(${z}, ${lengthCondition(bp)}, ${val})`,
  init,
)
