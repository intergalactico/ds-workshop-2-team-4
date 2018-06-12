import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';

import Footer from '.'

storiesOf('Footer', module) // eslint-disable-line no-undef
  .add('index', 
    withInfo(`Footer is as simple banner with one line of text.`)(() => (
    <Footer text="DSCONF 2018 - All rights reserved." />
  )));
