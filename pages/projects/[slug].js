import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import SectionSeparator from '@/components/section-separator'
import Layout from '@/components/layout'
import { getAllProjectsWithSlug, getProjectAndMoreProjects } from '@/lib/api'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'
import MoreProjects from '@/components/more-projects'
import ProjectHeader from '@/components/project-header'
import ProjectBody from '@/components/project-body'

export default function Project({ project, moreProjects, preview }) {
  const router = useRouter()
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {project.title} (Project) | MegaloSansYagami
                </title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <ProjectHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                author={project.author}
                quarter={project.quarter}
              />
              <ProjectBody content={project.content} />
            </article>
            <SectionSeparator />
            {moreProjects.length > 0 && <MoreProjects projects={moreProjects} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getProjectAndMoreProjects(params.slug, preview)
  const content = await markdownToHtml(data?.projects[0]?.content || '')

  return {
    props: {
      preview,
      project: {
        ...data?.projects[0],
        content,
      },
      moreProjects: data?.moreProjects,
    },
  }
}

export async function getStaticPaths() {
  const allProjects = await getAllProjectsWithSlug()
  return {
    paths: allProjects?.map((project) => `/projects/${project.slug}`) || [],
    fallback: true,
  }
}
