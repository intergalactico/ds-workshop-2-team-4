import React from 'react'
import { string, node, arrayOf, oneOfType } from 'prop-types';

import * as s from './styles.js'

const IdentityList = (props) => {
  return (
    <s.IdentityList>
      <s.IdentityListTopic>{props.topic}</s.IdentityListTopic>
      {props.children}
    </s.IdentityList>
  )
}

IdentityList.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  topic: string
};

export default IdentityList
