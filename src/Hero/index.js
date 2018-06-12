import React from 'react'

import * as s from './styles.js'
import { string } from 'prop-types';

const Hero = (props) => {
  return (
    <s.Hero background={props.background}>
      <s.HeroAligner>
        <s.HeroAlignerItem>
        <img src={props.logoImage} height="200" />
          <s.HeroTitle>{props.title}</s.HeroTitle>
          <s.HeroSubtitle>{props.subTitle}</s.HeroSubtitle>
          {props.subTitle2.toString().length > 0 && (
            <s.HeroSubtitle>{props.subTitle2}</s.HeroSubtitle>
          )}
          <s.HeroButton>Tekstiä</s.HeroButton>
        </s.HeroAlignerItem>
      </s.HeroAligner>
    </s.Hero>
  )
}

Hero.propTypes = {
  title: string,
  subTitle: string,
  subTitle2: string,
  background: string,
  logoImage: string
};

export default Hero
