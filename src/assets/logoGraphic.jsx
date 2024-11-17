import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'

export const Logo = styled((props) => {
  const { type, ...other } = props;

  const color = type ==='dark' ? '#364fc7' : '#FFFFFF';

  return (
    <svg
      alt=""
      width="40"
      height="40"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      {...other}>
      <path 
        opacity="0.4"
        fill={color}
        d="M20.7,41.9L0.1,21.3c-0.2-0.2-0.2-0.4,0-0.6L20.7,0.1c0.2-0.2,0.4-0.2,0.6,0l20.6,20.6c0.2,0.2,0.2,0.4,0,0.6
        L21.3,41.9C21.1,42,20.9,42,20.7,41.9z"
      />
      <polygon 
        opacity="0.4"
        fill={color}
        points="34.9,16.9 25.1,16.9 25.1,7.1 16.9,7.1 16.9,16.9 7.1,16.9 7.1,25.1 16.9,25.1 16.9,34.9 25.1,34.9 
        25.1,25.1 34.9,25.1 "
      />
      <path 
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M33.3,8.9c-0.2-0.8-4.4,0.9-7.3,1.7c-0.3,0.1-0.3,0.1-0.3-0.1c0-0.4-0.5-1.9-1.7-1.6c-0.9,0.2-1.9,1.7-2.2,2.5
        c-0.1,0.3-0.2-0.2-1-0.1c-0.3,0.1-0.8-0.2-1.8-0.2c-0.8,0-0.9,0.4-1.3,0.4c-0.5,0-0.8,0.1-1.2,0.5c-0.6,0.7-0.6,2.1-0.3,2.5
        c0.3,0.5,1.3,1.7,1.3,1.9c-0.2,0.8,0.6,1.3,1.4,1.7c0.2,0.1,0.4-0.3,0.7-0.2c0.2,0.1,0.2,0.2,0,0.3c-0.8,0.4-0.7,2.6-1.6,2.8
        c-1.4,0.3-1.5,0.3-2.5,0.1c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.7-0.4-1.3-0.5-1.4c0.6-0.6,0.2-1.4-0.3-1.8l0,0c0.5-0.7,0.1-1.2-0.4-1.7
        c0.8-0.2,1.3-0.6,1.2-1.5c0,0,0,0,0,0c0,0,0,0,0,0c0.2-0.7-0.1-1.3-0.3-1.9c-0.5,0.1-1,0.7-1.1,1.3c0,0,0,0,0,0c0,0,0,0,0,0
        c0.2,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0,0.2c0-0.1,0-0.1,0-0.2c-0.2,0.3-0.3,0.7-0.7,0.8v0c0-0.2,0-0.4,0-0.6c0-0.2,0-0.4-0.3-0.5
        c-0.2-0.1-0.4,0-0.5,0.2c-0.2,0.2-0.1,0.4,0,0.6c0.1,0.2,0.3,0.3,0.3,0.5c-0.2,0-0.3,0-0.5,0c0,0,0,0,0,0c-0.2,0-0.4-0.1-0.5-0.3
        c-0.2-0.4-0.3-0.8-0.5-1.2c-0.1-0.1-0.2-0.2-0.3-0.3c-0.4-0.3-1-0.5-1.2-0.3c-0.2,0.1-0.1,0.3,0,0.4c0.2,1.1,0.6,1.7,1.6,2
        c0,0,0.1,0,0.1,0.1c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.2,0c0.3,0,0.2,0.2,0.2,0.3c-0.1,0.4,0,0.7,0.2,0.9c0,0,0,0,0,0
        c0.1,0.2,0.2,0.3,0.4,0.4c-0.2,0.7,0.3,1.5,1,1.5c0,0,0,0.1,0.1,0.3c-0.3-0.1-0.6-0.1-0.8,0.1c-0.2,0.2-0.1,0.3-0.1,0.6
        c-0.1,0.6,0.1,1.1,0.6,1.3c0.2,0.1,0.6,0.1,1,0.2c0.6,1.8,1.3,4,1.5,4.2c0.5,0.7,0.3-0.2,0.2-0.5c-0.1-0.3-0.7-2-1.2-3.6
        c0.9,0.1,1.9,0.1,2.4,0.1c0.7,0,1-0.4,1.4-1.2c0.2-0.3,0.4-1.2,0.5-0.8c0.2,0.4,0.7,1.2,0.8,1.7c0.2,0.9-1.2,1-1.8,2
        c-0.2,0.3-0.2,0.8,0.1,1.1c1.2,1.1,2.6,1.4,4,1.6c0.2,0,0.4,0.1,0.4,0.3c0,1.1,0.1,2.2-0.3,3.2c-0.6,1.5-0.3,1.7-1,3.1
        c-0.1,0.3-1.1-1.2-2.2-1c-0.3,0.1-1.1,0.7-1,1.1c0,0,3.7,2.1,3.8,1.5c0.1-0.5,1.4-2.6,1.8-3.4c0.5-0.9,0.6-1.5,0.7-2.8
        c0-0.3,0.1-0.9,0.2-1.2c0.1-0.2,0.2-0.3,0.4-0.2c0.4,0.2,0.7,0.3,1.1,0.5c0.5,0.2-0.2,1-0.3,1.7c0,0.4,0.4,0.6,0.7,0.6
        c0.3,0,0.7-1.2,0.8-1.5c0.2-0.4,0.4-1.3,0.3-1.3c-0.8-0.3-1.8-1-2.2-1.1c-1.2-0.5-0.8-0.5-0.5-2.6c0.3-1.9-1.5-2.4-2.1-3.9
        C26.5,19.8,36.1,18,33.3,8.9z M14.8,13.1C14.8,13.1,14.8,13.1,14.8,13.1C14.8,13.1,14.8,13.1,14.8,13.1
        C14.8,13.1,14.8,13.1,14.8,13.1z M13.5,18c-0.7-0.5-0.7-0.8-0.1-1.1c0.1,0.1,0.1,0.3,0.2,0.4C13.6,17.6,13.6,17.8,13.5,18z
        M14.1,19.6c-0.5-0.3-0.7-0.7-0.4-1.2C14,18.8,14.2,19.2,14.1,19.6z M14,17.7c-0.1-0.1-0.1-0.3-0.2-0.4c0-0.1,0-0.3-0.1-0.4
        c0.4-0.2,0.5,0,0.6,0.3C14.4,17.4,14.4,17.7,14,17.7z M14.3,18.4c0-0.1,0.2-0.1,0.3,0c0.2,0.2,0.3,0.5,0.2,0.8
        c-0.1,0.2-0.2,0.2-0.3,0.1C14.3,19,14.2,18.7,14.3,18.4z M22.8,18.3c-0.3-0.6-0.9-0.8-0.9-0.6c-0.2-0.3-0.1-0.7,0-0.7
        c0,0,0.5-0.4,0.8-0.7c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0,0,0,0,0,0c0-0.2,0.1-0.3,0.2-0.5c0,0,0,0,0-0.1
        c0-0.1,0-0.2,0-0.3c0-0.2,0-0.5,0-0.7c0,0,0,0,0,0c-0.3-1.8-1.1-2.1-1.1-2.4c0.1-0.2,0.3-1.8,1.8-2.4c0.9-0.4,1.5,0.6,1.6,1.6
        c0,0,0,0.1,0,0.1c-0.3,0.2-1,0.8-1.5,2.5C23.5,15,23.1,16.6,22.8,18.3z"
      />
    </svg>
  );
})``;

Logo.defaultProps = {
  variant: 'dark'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark'])
};