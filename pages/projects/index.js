import Container from '@/components/container'
import Layout from '@/components/layout'
import { getAllProjectsForProjPage } from '@/lib/api'
import Head from 'next/head'
import HeroProject from '@/components/project-post'
import MoreProjects from '@/components/more-projects'
import ProjectIntro from '@/components/projectIntro'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'

export default function Index({ allProjects, preview }) {
  const heroProject = allProjects[0]
  const moreProjects = allProjects.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Projects | MegaloSansYagami</title>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <ProjectIntro />
          {heroProject && (
            <HeroProject
              title={heroProject.title}
              coverImage={heroProject.coverImage}
              date={heroProject.date}
              author={heroProject.author}
              slug={heroProject.slug}
              excerpt={heroProject.excerpt}
            />
          )}
          {moreProjects.length > 0 && <MoreProjects projects={moreProjects} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allProjects = (await getAllProjectsForProjPage(preview)) || []
  return {
    props: { allProjects, preview },
  }
}
