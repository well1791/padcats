import tokens from './tokens'

type Bp = keyof typeof tokens._bp

export const fromBp = (bp: Bp) => `screen and (min-width: ${tokens._bp[bp]})`

export const fromBpVars = (bp: Bp, vars: Record<string, string>) => ({
  [fromBp(bp)]: { vars },
})
