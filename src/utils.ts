type MaybeString = string | undefined

export const c = (...list: Array<MaybeString>): Array<string> => list
  .map((i) => i?.trim())
  .filter((item): item is string => Boolean(item))

export const cx = (separator: string) =>
  (...list: Array<MaybeString>): string => c(...list).join(separator)

export const cs = cx(' ')
export const cc = cx(', ')

// export const cc =
