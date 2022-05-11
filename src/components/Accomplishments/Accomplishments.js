import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

// we kept the data inside our file instead of putting it on constants because it contains just 6 lines.
const data = [
  { number: 10, text: 'Open Source Projects'},
  { number: 20, text: 'Students', },
  { number: 20, text: 'Github Followers', },
  { number: 10, text: 'Github Stars', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
