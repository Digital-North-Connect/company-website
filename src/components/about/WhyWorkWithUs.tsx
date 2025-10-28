import { ContentSection } from '../ui/ContentSection';
import { TextSection } from '../ui/TextSection';

export const WhyWorkWithUs: React.FC = () => {
  return (
    <ContentSection title="Why Work With Us" backgroundColor="#f8fafc">
      <TextSection>
        <p style={{ marginBottom: '20px' }}>
          You could hire a large consulting firm and pay premium rates for junior developers managed by account executives. You could cobble together freelancers and hope they work well together. Or you could work with us.
        </p>
        <p style={{ marginBottom: '20px' }}>
          With Digital North Connect, you get direct access to senior-level engineering expertise without the overhead. You get someone who's been in the trenches, built systems at scale, and knows how to translate complex technical decisions into clear business value.
        </p>
        <p>
          Most importantly, you get a partner who genuinely cares about helping you reach your North Star. Because when you succeed, we succeed.
        </p>
      </TextSection>
    </ContentSection>
  );
};
