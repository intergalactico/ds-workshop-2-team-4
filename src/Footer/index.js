import React from 'react'

import * as s from './styles.js'
import { string } from 'prop-types';


const Footer = (props) => {
  return (
    <s.Footer><s.FooterP>{props.text}</s.FooterP></s.Footer>
  )
}
Footer.propTypes = {
  text: string
}

export default Footer
