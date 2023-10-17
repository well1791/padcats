import './layout.css'

type Props = React.PropsWithChildren<{}>

function Layout({ ...p }: Props) {
  return (
    <>
      <header>header?</header>
      {p.children}
      <footer>footer</footer>
    </>
  )
}

export default Layout;
