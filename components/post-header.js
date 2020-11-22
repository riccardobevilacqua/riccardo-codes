import DateFormatter from '@components/date-formatter'
import CoverImage from '@components/cover-image'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <h3 className="title">{title}</h3>
      <h4 className="subtitle">
        <DateFormatter dateString={date} />
      </h4>
      <div className="my-4">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  )
}
