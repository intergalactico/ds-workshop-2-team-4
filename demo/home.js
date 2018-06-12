/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'

import { Hero } from '../lib/my-awesome-library';

import bg from '../assets/dsconf-wide.jpg'
import logo from '../assets/dsconf-logo.png'

const Home = () => {
  return (
    <div>
      <Hero background={bg}
        logoImage={logo}
        title="A DESIGN SYSTEMS CONFERENCE"
        subTitle="MARCH 14TH - 15TH"
        subTitle2="2018 IN HELSINKI, FINLAND"
      />
    </div>
  )
}

export default Home
