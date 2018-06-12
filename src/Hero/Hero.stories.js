import React from 'react'
import { storiesOf } from '@storybook/react'

import Hero from '.'

storiesOf('Hero', module)
  .add('index', () => (
    <Hero 
      title='A Design Systems conference'
      subTitle={'March 14th - 15th, 2018'}
      subTitle2={'In Helsinki, Finland'} />
  ))
