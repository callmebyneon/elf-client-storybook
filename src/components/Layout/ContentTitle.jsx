import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Divider, Typography } from '@mui/material';

const TitleHeading = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const TitleAction = styled('div')`
  margin-left: auto;
`;

export default function ContentTitle({ title, subTitle, pageAction, divider }) {
  return (
    <>
      <TitleHeading>
        <div>
          <Typography variant="h3" component="h3" sx={{ fontSize: '24px', fontWeight: 700 }}>{title}</Typography>
          {subTitle && <Typography variant="subtitle1" component="p" sx={{ my: 2 }}>{subTitle}</Typography>}
        </div>
        {pageAction && <TitleAction>{pageAction}</TitleAction>}
      </TitleHeading>
      {divider && <Divider light />}
    </>
  )
};

ContentTitle.propTypes = {
  /* 
   * content page's title
   */
  title: PropTypes.string.isRequired,
  /* 
   * content page's sub title
   */
  subTitle: PropTypes.string,
  /* 
   * content page's action button element
   */
  pageAction: PropTypes.node,
  /* 
   * divider between the title and content area
   */
  divider: PropTypes.bool
};

ContentTitle.defaultProps = {
  divider: false
};