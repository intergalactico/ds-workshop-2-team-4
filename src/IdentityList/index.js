import React from 'react'
import { string, node, arrayOf, oneOfType } from 'prop-types';

import * as s from './styles.js'

const IdentityList = (props) => {
  const topic = props.topic ? <s.IdentityListTopic>{props.topic}</s.IdentityListTopic> : null;

  return (
    <s.IdentityList>
      {topic}
      {props.children}
    </s.IdentityList>
  )
}

IdentityList.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  topic: string
};

export default IdentityList
