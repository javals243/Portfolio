import Accomplishments from '../components/Accomplishments/Accomplishments';
import Contact from '../components/Contact/Contact';

import Hero from '../components/Hero/Hero';
import ImageRwite from '../components/imageRwrite/ImageRwite';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <ImageRwite/>
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
      <Contact/>
    </Layout>
  );
};

export default Home;
