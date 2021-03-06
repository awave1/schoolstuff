import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import { leKebab } from '../utils/utils';

const Tag = styled.li`
  margin: 1rem 0;
  font-family: 'Hack', monospace;
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const list =
    group && group.length ? (
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {group.map(tag => (
          <Tag key={tag.fieldValue}>
            <Link to={`/tags/${leKebab(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </Tag>
        ))}
      </ul>
    ) : (
      <div>
        <h2>No Tags</h2>
      </div>
    );
  return (
    <div>
      <Helmet title={title} />
      <div>
        <h3>Tags</h3>
        {list}
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
