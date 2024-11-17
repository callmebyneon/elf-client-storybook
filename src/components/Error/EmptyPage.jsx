import React from 'react';
import PropTypes from 'prop-types';

import ContentTitle from '../Layout/ContentTitle';

import NotMatch from './NotMatch';

export default function EmptyPage({ title }) {
  return (
    <>
      <ContentTitle title={title} subTitle="Subtitle here." />
      <NotMatch />
    </>
  );
};

EmptyPage.propTypes = {
  title: PropTypes.string,
};

EmptyPage.defaultProps = {
  title: 'Page Title'
};