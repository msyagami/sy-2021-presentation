import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Layout from '@/components/layout'
import { getAllPostsForBlog } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import BlogIntro from '@/components/blogIntro'

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog | MegaloSansYagami</title>
        </Head>
        <Container>
          <BlogIntro />
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
  const allPosts = (await getAllPostsForBlog(preview)) || []
  return {
    props: { allPosts, preview },
  }
}
