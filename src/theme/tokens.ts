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
  size: {
    prose: '65ch',
  },
  bp: {
    lg: '1280rem',
    xl: '1512rem',
  },
  font: {
    primary: '"Quicksand Book", sans-serif',
  },
} as const

export default tokens
