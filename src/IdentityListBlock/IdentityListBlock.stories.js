import React from 'react'
import { storiesOf } from '@storybook/react'

import IdentityListBlock from '.'

storiesOf('IdentityListBlock', module)
  .add('index', () => (
    <IdentityListBlock />
  ))
