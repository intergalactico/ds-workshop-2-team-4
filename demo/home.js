/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'

import { NavigationBar, MenuLink } from '../lib/my-awesome-library';

const Home = () => {
  return (
    <div>
      <NavigationBar brand={{ link: "https://dsconference.com/", img: "../assets/dsconf-logo-small.png" }}>
        <MenuLink active activeColor="cyan">
          Home
        </MenuLink>
        <MenuLink>
          About
        </MenuLink>
        <MenuLink>
          Event Overview
        </MenuLink>
      </NavigationBar>
    </div>
  )
}

export default Home
