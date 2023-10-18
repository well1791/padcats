export const tokens = {
  color: {
    primary: {
      bg: '#e4f9ff',
      text: 'white',
    },
    secondary: {
      bg: 'rgba(255, 255, 255, 0.03)',
      text: 'rgba(255, 255, 255, 0.30)',
    },
    tertiary: {
      bg: '#1a1a1a',
      text: 'rgba(255, 255, 255, 0.40)',
    },
    accent: {
      bg: '#5C67DE',
      text: 'white',
    },
  },
  bp: {
    container: 'calc(1512 / 16 * 1rem)',
    content: 'calc(832 / 16 * 1rem)',
  },
} as const

export default tokens
