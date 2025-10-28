import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HowWeWork } from '../components/home/HowWeWork';
import { CTASection } from '../components/home/CTASection';

export const Home = () => {
  return (
    <>
      <title>Digital North Connect | Enterprise-Level Software Development for Growing Businesses</title>
      <meta name="description" content="Connect your business to enterprise-quality software solutions. Full-stack development, AWS cloud infrastructure, and technical advisory services for growing companies." />
      <meta property="og:title" content="Digital North Connect | Enterprise Software Development" />
      <meta property="og:description" content="Enterprise-quality software development without enterprise costs" />
      <meta property="og:type" content="website" />

      <div style={{ minHeight: '100vh' }}>
        <Navbar />

        <main>
          <Hero />
          <ServicesOverview />
          <WhyChooseUs />
          <HowWeWork />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};
