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
    prose: '832rem',
  },
  bp: {
    sm: '1024rem',
    md: '1268rem',
    xl: '1512rem',
  },
  _bp: {
    sm: '1024px',
    md: '1268px',
    xl: '1512px',
  },
  font: {
    primary: '"Quicksand Book", sans-serif',
  },
} as const

export default tokens
