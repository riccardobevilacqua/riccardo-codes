export default function Container({ children }) {
  return (
    <section className="section">
      <div className="container is-max-desktop">{children}</div>
    </section>
  )
}
