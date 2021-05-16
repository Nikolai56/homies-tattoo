import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'

export const BlogPostTemplate = ({ content, title, helmet }) => {
  return (
    <article className="d-flex flex-column align-items-center">
      {helmet || ''}
      <h1 className="mt-4 mb-4">{title}</h1>
      <MDXRenderer>{content}</MDXRenderer>
    </article>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { mdx: post } = data
  return (
    <Layout>
      <BlogPostTemplate
        content={post.body}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta name="keywords" content={`${post.frontmatter.keywords}`} />
            <body className="articlePage" />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
}

export default BlogPost

export const blogPostByIDQuery = graphql`
  query BlogPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        keywords
      }
    }
  }
`
