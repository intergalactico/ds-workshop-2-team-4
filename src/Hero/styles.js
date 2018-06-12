import styled, { css } from 'styled-components'
import * as ts from '../Typography/styles.js';
import * as but from '../Button/styles.js';

const setBg = ({ background }) => {
  if (!background) return;
  return css`
    ${`background-image: url('${background}')`};
   
  `;
};


export const Hero = styled.div`
  color: white;
  background: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${setBg}
`
export const HeroTitle = styled(ts.Header1)`
  color: white;
  text-transform: uppercase;
`
export const HeroSubtitle = styled(ts.Lato)`
  color: white;
  text-transform: uppercase;
  flex: none;
  margin: 0;
`
export const HeroAligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const HeroAlignerItem = styled.div`
  flex: 1;
`
export const HeroButton = styled(but.ButtonLink)`
  color: white;
  margin-top: 15px;
  border: 2px solid;
  border-color: white;
  text-transform: uppercase;
  font-weight: bold;
`