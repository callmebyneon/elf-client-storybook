
export const styleAbsolutePosition = {
  display: 'block',
  position: "absolute",
  top: 0,
  left: 0,
};

export const styleVisuallyHidden = {
  ...styleAbsolutePosition,
  zIndex: -1,
  left: '-1px',
  top: '-1px',
  width: '1px',
  height: '1px',
  margin: 0,
  padding: 0,
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px solid',
  overflow: 'hidden',
  visibility: 'hidden',
  whiteSpace: 'nowrap',
  backgroundColor: 'transparent',
};
