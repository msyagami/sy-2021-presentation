import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Home | MegaloSansYagami</title>
          <meta property="og:url" content={process.env.MAIN_PAGE_URL} />
          <meta property="og:image" content={heroPost.coverImage} />
          <meta property="og:image:alt" content={HOME_OG_IMAGE_URL} />
          <meta property="og:title" content="Home | MegaloSansYagami" />
          <meta property="og:description" content="MegaloSansYagami SY 2020-2021 Portfolio Website." />
          <meta property="og:type" content="website" />
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              quarter={heroPost.quarter}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts, preview },
    revalidate: 60 * 60 * 3,
  }
}
