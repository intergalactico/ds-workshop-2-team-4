import styled from 'styled-components'

export const Section = styled.div`
  background-color: ${p => p.bgcolor ? p.bgcolor : 'black'};
  color: ${p => p.textColor ? p.textColor : 'white'};
  p {
    color: ${p => p.textColor ? p.textColor : 'white'};
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
  padding-right: 0;
  padding-bottom: 100px;
  padding-left: 0;
`

export const SectionInner = styled.div`
  padding-top: 50px;
  padding-right: 35px;
  padding-bottom: 50px;
  padding-left: 35px;
  max-width: 600px;
  h1 {
    text-align: center;
    font-size: 32px;
  }
  a {
    color: #e7d70c;
    text-decoration: none;
  }
  a:hover {
    color: #f8e71c;
  }
`
