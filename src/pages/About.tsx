import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/ui/PageHero';
import { OurStory } from '../components/about/OurStory';
import { WhoWeAre } from '../components/about/WhoWeAre';
import { CoreValues } from '../components/about/CoreValues';
import { WhyWorkWithUs } from '../components/about/WhyWorkWithUs';
import { CTASection } from '../components/home/CTASection';

export const About = () => {
  return (
    <>
      <title>About Us - Digital North Connect | Enterprise-Level Software Development</title>
      <meta name="description" content="Learn about Digital North Connect, a trusted partner bringing enterprise-level software development expertise to growing businesses." />
      <meta property="og:title" content="About Us - Digital North Connect" />
      <meta property="og:description" content="Enterprise-level software development expertise for growing businesses" />
      <meta property="og:type" content="website" />

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <PageHero
            title="Guiding Your Business to Its North Star"
            subtitle="We're not just another software agency. We're your trusted navigation partner, bringing enterprise-caliber engineering to growing businesses."
          />

          <OurStory />
          <WhoWeAre />
          <CoreValues />
          <WhyWorkWithUs />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};
