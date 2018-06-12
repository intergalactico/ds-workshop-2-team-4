/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'

import { Hero, IdentityList, IdentityListBlock, Section, SectionHeader, SectionText, TeamMember } from '../lib/my-awesome-library';

import bg from '../assets/dsconf-wide.jpg'
import logo from '../assets/dsconf-logo.png'
import speaker from '../assets/anne-jina.jpg'

const Home = () => {
  return (
    <div>
      <Hero background={bg}
        buttonText="EVENT OVERVIEW"
        logoImage={logo}
        title="A DESIGN SYSTEMS CONFERENCE"
        subTitle="MARCH 14TH - 15TH"
        subTitle2="2018 IN HELSINKI, FINLAND"
      />
      <Section>
        <SectionHeader>
          Test
        </SectionHeader>
        <SectionText>
          Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography).
          <a href="https://hs.fi">
            Linkki
          </a>
        </SectionText>
        <SectionText>
          Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography).
          <a href="https://hs.fi">
            Linkki
          </a>
        </SectionText>
      </Section>
      <Section bgcolor="white" textColor="black">
        <SectionHeader>
          Test
        </SectionHeader>
        <SectionText>
          Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography).
          <a href="https://hs.fi">
            Linkki
          </a>
        </SectionText>
        <SectionText>
          Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography). Text inside the section (without typography).
          <a href="https://hs.fi">
            Linkki
          </a>
        </SectionText>
      </Section>
      <IdentityList topic="Keynotes">
        <IdentityListBlock itemWidth={50}>
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
      <IdentityList topic="Speaker">
        <IdentityListBlock itemWidth={33}>
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
    </div>
  )
}

export default Home
