import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';

import Hero from '.'

import heroBg from '../../assets/dsconf-wide.jpg';
import heroLogo from '../../assets/dsconf-logo.png';

storiesOf('Hero', module)
  .add('index', withInfo(`Hero is hero`)(() => (
    <Hero 
      title='A Design Systems conference'
      subTitle={'March 14th - 15th, 2018'}
      subTitle2={'In Helsinki, Finland'}
      background={heroBg}
      logoImage={heroLogo} />
  )))
