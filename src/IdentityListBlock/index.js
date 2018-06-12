import React from 'react'
import { number, node, arrayOf, oneOfType } from 'prop-types';

import * as s from './styles.js'

const IdentityListBlock = (props) => {
  return (
    <s.IdentityListBlock>
      {React.Children.map(props.children, function (child) {
        return React.cloneElement(child, { itemWidth: props.itemWidth });
      })}
    </s.IdentityListBlock>
  )
}

IdentityListBlock.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  itemWidth: number
}

export default IdentityListBlock
