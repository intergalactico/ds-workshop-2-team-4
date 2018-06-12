import React from 'react'
import { string, node, arrayOf, oneOfType } from 'prop-types';

import * as s from './styles.js'

const IdentityList = (props) => {
  const topic = props.topic ? <s.IdentityListTopic>{props.topic}</s.IdentityListTopic> : null;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <s.IdentityList>
        {topic}
        {props.children}
      </s.IdentityList>
    </div>
  )
}

IdentityList.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  topic: string
};

export default IdentityList
