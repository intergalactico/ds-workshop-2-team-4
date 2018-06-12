import React from 'react'

import * as s from './styles.js'
import { string } from 'prop-types';

const Footer = (props) => {
  return (
    <s.Footer>{props.text}</s.Footer>
  )
}
Footer.propTypes = {
  text: string
}

export default Footer
