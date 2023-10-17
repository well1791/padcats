export const cx = (list: Array<string | undefined>): string =>
  list.filter((item) => Boolean(item?.trim())).join(' ')
