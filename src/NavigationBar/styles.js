import styled from 'styled-components'

export const NavigationBar = styled.div`
  height: 80px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.bgcolor ? p.bgcolor : 'none'};
  position: fixed;
  top: 0;
`

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 20px;
`

export const BrandLogo = styled.img`
  margin-left: 20px;
  max-height: 50px;
`
