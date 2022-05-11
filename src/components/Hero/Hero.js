import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionText>
        <span
          style={{
            color: "#3B82F6",
            fontSize: "30px",
            lineHeight: "40px",
            fontWeight: 500,
          }}
        >
          {" "}
          Hey there 👋 it's, Valere chihisa
        </span>
      </SectionText>
      <SectionText>
        I am a Full Stack Web Developer with a passion for creating beautiful
        and intuitive Websites and Web Applications.
      </SectionText>

      <Button onClick={() => (window.location = "https://www.google.com/")}>
        Hire Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;