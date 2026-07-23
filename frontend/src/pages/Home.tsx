import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Stack from '@/components/sections/Stack';
import Projects from '@/components/sections/Projects';
import Timeline from '@/components/sections/Timeline';
import Stats from '@/components/sections/Stats';
import Github from '@/components/sections/Github';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Stack />
      <Projects />
      <Timeline />
      <Github />
      <Contact />
    </>
  );
}
