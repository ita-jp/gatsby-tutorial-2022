import * as React from 'react'
import {
    useStaticQuery,
    graphql
  } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }`)
    return (
        <Layout pageTitle="My Blog Posts">
          <ul>
            {
              data.allFile.nodes.map(node => (
                <li key={node.name}>
                  {node.name}
                </li>
              ))
            }
          </ul>
        </Layout>
    )
}

export default BlogPage
