import React from 'react'

import * as s from './styles.js'
import { string, shape, oneOfType, arrayOf, node } from 'prop-types'

const NavigationBar = (props) => {
  return (
    <s.NavigationBar bgcolor={props.bgcolor}>
      <a href={props.brand.link}><s.BrandLogo src={props.brand.img} /></a>
      <s.MenuLinks>
        {props.children}
      </s.MenuLinks>
    </s.NavigationBar>
  )
}

NavigationBar.propTypes = {
  brand: shape({
    link: string,
    img: string
  }),
  bgcolor: string,
  children: oneOfType([arrayOf(node), node])
};

export default NavigationBar
