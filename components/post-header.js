import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Quarter from './quarter'

export default function PostHeader({ title, coverImage, date, quarter, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:mb-12 justify-evenly">
        <div className="my-2">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="my-2">
          <Quarter name={quarter.name} picture={quarter.picture} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden my-2">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="block md:hidden my-2">
          <Quarter name={quarter.name} picture={quarter.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
