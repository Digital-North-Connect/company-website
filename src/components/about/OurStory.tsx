import { ContentSection } from '../ui/ContentSection';
import { TextSection } from '../ui/TextSection';

export const OurStory: React.FC = () => {
  return (
    <ContentSection title="Our Story" backgroundColor="white">
      <TextSection>
        <p style={{ marginBottom: '20px' }}>
          Digital North Connect was founded on a simple observation: small and medium-sized businesses need enterprise-quality software, but they shouldn't need enterprise budgets or timelines to get it.
        </p>
        <p style={{ marginBottom: '20px' }}>
          After years of building high-scale systems at top tech companies—handling millions of requests, processing massive data pipelines, and architecting solutions that just work—I saw how much value could be delivered to growing businesses by applying those same principles and practices.
        </p>
        <p>
          Every business has its North Star—a guiding vision of where it wants to go. Our mission is to connect you to the right technology solutions that illuminate your path forward, built with the same rigor and quality you'd expect from the world's best engineering teams.
        </p>
      </TextSection>
    </ContentSection>
  );
};
