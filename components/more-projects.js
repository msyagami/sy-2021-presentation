import PostPreview from './project-preview'

export default function MoreProjects({ projects }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {projects.map((project) => (
          <PostPreview
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            author={project.author}
            slug={project.slug}
            excerpt={project.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
