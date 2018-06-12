import React from 'react'
import { storiesOf } from '@storybook/react'

import NavigationBar from '.'
import MenuLink from '../MenuLink'
import logoimg from '../../assets/dsconf-logo-small.png'
import { withInfo } from '@storybook/addon-info'

storiesOf('NavigationBar', module)
  .add('index', withInfo('Navigation bar with brand logo and menu items. Define a brand logo with the "brand"-prop')(() => (
    <NavigationBar brand={{link: 'https://hs.fi', img: logoimg}} bgcolor={'black'}>
      <MenuLink active activeColor={'cyan'}><a>Home</a></MenuLink>
      <MenuLink><a>About</a></MenuLink>
      <MenuLink><a>Event Overview</a></MenuLink>
    </NavigationBar>
  )))
