import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <MDXRenderer>{content}</MDXRenderer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { mdx: post } = data

  return (
    <Layout>
      <AboutPageTemplate title={post.frontmatter.title} content={post.body} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`
