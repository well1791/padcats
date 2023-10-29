import * as st from './styles.css'

type Props = {
  Component: React.ComponentType<{ className?: string }>
}

function Icon({ Component }: Props) {
  return <Component className={st.container} aria-hidden="true" />
}

export default Icon
