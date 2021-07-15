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
        <meta property="og:url" content={`${process.env.MAIN_PAGE_URL}/projects`} />
          <meta property="og:image" content={heroProject.coverImage} />
          <meta property="og:image:alt" content={HOME_OG_IMAGE_URL} />
          <meta property="og:title" content="Projects | MegaloSansYagami" />
          <meta property="og:description" content="MegaloSansYagami SY 2020-2021 Portfolio Website." />
          <meta property="og:type" content="website" />
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
    revalidate: 60 * 60 * 3,
  }
}
