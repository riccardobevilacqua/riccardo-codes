import { BLOG_AUTHOR, BLOG_AUTHOR_LINK } from '@lib/constants'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Created with &hearts; by <a href={BLOG_AUTHOR_LINK} target="_blank">{BLOG_AUTHOR}</a> &copy; 2020</p>
      </div>
    </footer>
  )
}
