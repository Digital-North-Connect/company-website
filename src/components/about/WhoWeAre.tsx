import { ContentSection } from '../ui/ContentSection';
import { TextSection } from '../ui/TextSection';
import { IconList } from '../ui/IconList';

export const WhoWeAre: React.FC = () => {
  const expertise = [
    'Full-stack development with modern frameworks (React, Java, TypeScript)',
    'AWS cloud architecture and infrastructure design',
    'High-traffic systems handling millions of requests',
    'Data engineering and pipeline orchestration',
    'Technical leadership and team collaboration',
  ];

  return (
    <ContentSection title="Who We Are" backgroundColor="#f8fafc">
      <TextSection>
        <p style={{ marginBottom: '20px' }}>
          Digital North Connect is led by an experienced software engineer with a proven track record of building and scaling systems in enterprise environments. Our expertise spans:
        </p>
      </TextSection>

      <IconList items={expertise} />

      <TextSection>
        <p style={{ marginTop: '20px' }}>
          We bring this enterprise experience directly to your business, without the overhead, bureaucracy, or inflated costs of traditional consulting firms.
        </p>
      </TextSection>
    </ContentSection>
  );
};
