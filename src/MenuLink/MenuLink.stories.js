import React from 'react'
import { storiesOf } from '@storybook/react'

import MenuLink from '.'
import { withInfo } from '@storybook/addon-info';

storiesOf('MenuLink', module)
  .add('index', withInfo('MenuLink component to be used in NavigationBar')(() => (
    <MenuLink color={'black'}>This is a menulink</MenuLink>
  )))
