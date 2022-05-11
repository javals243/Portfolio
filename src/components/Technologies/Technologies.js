import React from 'react';
import { DiFirebase, DiHtml5, DiHtml53DEffects, DiReact, DiTerminal, DiZend } from 'react-icons/di';
import { SiGithub, SiJavascript, SiNpm, SiPhp, SiReact, SiTailwindcss } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies, from front-end to back-end, and
      I've worked with a variety of languages.
    </SectionText>
    <List>
      <ListItem>

        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
           <DiHtml5/>  HTML / CSS
          </ListParagraph>
           <ListParagraph>
           <SiJavascript/>  JavaScript / TypeScript
          </ListParagraph>
           <ListParagraph>
           <SiPhp/>  PHP
          </ListParagraph>
           
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
          <SiReact/>  React JS / Next JS
          </ListParagraph>
           <ListParagraph>
           <DiHtml53DEffects/> Nest JS / Express JS
          </ListParagraph>
          <ListParagraph>
           <SiTailwindcss/> Tailwind / Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
          <SiGithub/>  Git / Github
          </ListParagraph>
          <ListParagraph>
           <SiNpm/> NPM / Yarn
          </ListParagraph>
          <ListParagraph>
           <DiTerminal/> Terminal / cPanel
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
     
    </List>
   
   
  </Section>
);

export default Technologies;
