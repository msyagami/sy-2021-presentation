import Container from './container'
import cn from 'classnames'

export default function Alert({ preview, projPreview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-yellow-300 border-yellow-500 text-black': preview || projPreview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-green-500 duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
