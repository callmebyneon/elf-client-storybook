import React from 'react'
import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'

const CenteredDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.background.dimmed};
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.fullHeight ? 'calc(100vh - 260px)' : '100%'};
  margin: 4px;
  padding: 8px;
  & > span {
    margin-top: 8px;
  }
`

export const Loader = (props) => (
  <CenteredDiv>
    <LoaderWrapper fullHeight={props?.fullHeight ? true : false}>
      <CircularProgress size={24} thickness={4} />
      <span>Loading...</span>
    </LoaderWrapper>
  </CenteredDiv>
)