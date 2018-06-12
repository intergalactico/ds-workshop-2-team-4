import React from 'react'
import { storiesOf } from '@storybook/react'

import IdentityList from '.'
import IdentityListBlock from 'IdentityListBlock'
import TeamMember from 'TeamMember'

import speaker from '../../assets/anne-jina.jpg';

storiesOf('IdentityList', module)
  .add('with two persons per row', () => (
    <IdentityList topic="Keynotes">
      <IdentityListBlock itemWidth={50}>
        <TeamMember
          name="Nathan Curtis"
          title="Co-founder of EightShapes"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
        />
      </IdentityListBlock>
    </IdentityList>
  ))
  .add('with three persons per row', () => (
    <IdentityList topic="Keynotes">
      <IdentityListBlock itemWidth={33}>
        <TeamMember
          name="Nathan Curtis"
          title="Co-founder of EightShapes"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
        />
      </IdentityListBlock>
    </IdentityList>
  ))
  .add('with descriptions', () => (
    <IdentityList topic="Keynotes">
      <IdentityListBlock itemWidth={33}>
        <TeamMember
          name="Nathan Curtis"
          title="Co-founder of EightShapes"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
          description="Employer branding enthusiast and passionate leader from Finland living in Helsinki. Sakke is a builder of all things with broad range of skills and he has worked in the industry 15+ years. In his freetime, Sakke hangs out with his family and enjoys movies. Currently, he is creating awesome events and new business at Elisa."
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
          description="Employer branding enthusiast and passionate leader from Finland living in Helsinki. Sakke is a builder of all things with broad range of skills and he has worked in the industry 15+ years. In his freetime, Sakke hangs out with his family and enjoys movies. Currently, he is creating awesome events and new business at Elisa."
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
          description="Employer branding enthusiast and passionate leader from Finland living in Helsinki. Sakke is a builder of all things with broad range of skills and he has worked in the industry 15+ years. In his freetime, Sakke hangs out with his family and enjoys movies. Currently, he is creating awesome events and new business at Elisa."
        />
        <TeamMember
          name="Jina Anna"
          title="Senior Design Systems Lead at Amazon"
          social={{
            twitter: 'donaldducknl',
          }}
          avatar={speaker}
          description="Employer branding enthusiast and passionate leader from Finland living in Helsinki. Sakke is a builder of all things with broad range of skills and he has worked in the industry 15+ years. In his freetime, Sakke hangs out with his family and enjoys movies. Currently, he is creating awesome events and new business at Elisa."
        />
      </IdentityListBlock>
    </IdentityList>
  ))
