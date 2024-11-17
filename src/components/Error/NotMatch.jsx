import PropTypes from'prop-types'
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const TextCenterBox = styled('div')`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
`;

export function DefaultErrorPage({ errorMsg }) {
  return (
    <TextCenterBox>
      <h3 style={{ fontSize: '24px' }}>{errorMsg}</h3>
      <Typography
        variant='body1'
        color="primary"
        sx={{
          fontSize: '16px',
          '& a': {
            textDecoration: 'underline'
          } 
        }}>
        <NavLink to="/signin">이 링크를 클릭하여 로그인 페이지로 이동하세요.</NavLink>
      </Typography>
    </TextCenterBox>
  );
}

DefaultErrorPage.propTypes = {
  errorMsg: PropTypes.string,
}

export default function NotMatch() {
  return (
    <DefaultErrorPage errorMsg="존재하지 않는 페이지입니다." />
  );
}