import styled from '@emotion/styled';
import { FOOTER_HEIGHT } from './pixelConstants'

const Logos = styled.div`
  display: grid;
  grid-gap: 2.4rem;
  align-items: center;
  justify-content: ${props => (props.margin ? 'space-evenly' : 'start')};
  grid-template-columns: auto auto auto;
  margin: ${props => (props.margin ? '3rem auto 0' : '0 auto')};
`

export function FooterLogo({ center = false }) {
  return (
    <Logos margin={center}>
      <img src="image/cnt.jpg" alt="CNT Logo" />
      <img src="image/smc.jpg" alt="SMC Logo" />
      <img src="image/kumc.jpg" alt="KUMC Logo" />
    </Logos>
  )
}

const Footer = styled.footer(({ theme }) => ({
  display: 'flex',
  width: `100%`,
  height: `${FOOTER_HEIGHT}px`,
  padding: '0 1rem',
  background: theme.palette.common.white,
  borderTop: `1px solid ${theme.palette.primary.light}`,
  boxSizing: 'border-box',
}))

export function FooterBox({ center }) {
  return (
    <Footer>
      <FooterLogo center={center} />
    </Footer>
  )
}