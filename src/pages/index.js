import React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/PostLink';
import Bio from '../components/Bio';
import './index.css';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const content = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <>
      <Bio />
      <div style={{ marginTop: 45 }}>{content}</div>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
