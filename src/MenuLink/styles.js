import styled from 'styled-components'

export const MenuLink = styled.div`
  padding: 0 10px;
  a {
    color: ${p => p.active && p.activeColor ? p.activeColor : (p.color ? p.color : 'white')};
    transition: 0.3s;
  }
  a:hover {
    cursor: pointer;
    color: ${p => p.active ? p.activeColor : 'lightgrey'};
  }
  p {
    font-size: 14px;
  }
`
