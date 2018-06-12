import React from 'react'

import * as s from './styles.js'
import * as ts from '../Typography/styles.js';
import { oneOfType, arrayOf, node, boolean, string } from 'prop-types'

const MenuLink = (props) => {
  return (
    <s.MenuLink active={props.active} color={props.color} activeColor={props.activeColor}><ts.Lato>{props.children}</ts.Lato></s.MenuLink>
  )
}

MenuLink.propTypes = {
  active: boolean,
  color: string,
  activeColor: string,
  children: oneOfType([arrayOf(node), node])
};

export default MenuLink
