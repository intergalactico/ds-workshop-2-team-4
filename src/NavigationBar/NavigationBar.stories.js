import React from 'react'
import { storiesOf } from '@storybook/react'

import NavigationBar from '.'
import MenuLink from '../MenuLink'
import logoimg from '../../assets/dsconf-logo-small.png'
import { withInfo } from '@storybook/addon-info'

storiesOf('NavigationBar', module)
  .add('index', withInfo('Navigation bar with brand logo and menu items. Define a brand logo with the "brand"-prop')(() => (
    <NavigationBar brand={{link: 'https://hs.fi', img: logoimg}} bgcolor={'black'}>
      <MenuLink active activeColor={'cyan'}>Home</MenuLink>
      <MenuLink>About</MenuLink>
      <MenuLink>Event Overview</MenuLink>
    </NavigationBar>
  )))
