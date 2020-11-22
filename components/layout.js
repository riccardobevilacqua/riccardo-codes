import Meta from '@components/meta'
import Hero from '@components/hero'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Hero />
      {children}
    </>
  )
}
