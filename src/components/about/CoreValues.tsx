import { ContentSection } from '../ui/ContentSection';
import { CardGrid } from '../ui/CardGrid';
import { ValueCard } from '../ui/ValueCard';

export const CoreValues: React.FC = () => {
  const values = [
    {
      title: 'Clarity First',
      description: 'Like the North Star cutting through the night sky, we believe in crystal-clear communication. No jargon, no surprises—just honest, straightforward guidance.',
      icon: '🧭'
    },
    {
      title: 'Quality Without Compromise',
      description: 'Enterprise-grade code, testing, and architecture aren\'t luxuries—they\'re the foundation. We build solutions that scale with your growth.',
      icon: '⭐'
    },
    {
      title: 'Partnership, Not Transactions',
      description: 'Your success is our success. We\'re invested in helping you reach your goals, not just checking boxes on a contract.',
      icon: '🤝'
    },
    {
      title: 'Pragmatic Innovation',
      description: 'We use proven, reliable technology that solves your specific problems—not the latest hype. Your business needs solutions that work, not experiments.',
      icon: '🔧'
    },
    {
      title: 'Speed with Intention',
      description: 'We move fast, but we move smart. Rapid delivery shouldn\'t mean cutting corners. Every line of code is written with long-term maintainability in mind.',
      icon: '⚡'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees, no scope creep surprises. You\'ll know exactly what you\'re investing and what you\'re getting in return.',
      icon: '💎'
    },
  ];

  return (
    <ContentSection title="Our Core Values" backgroundColor="white" maxWidth="1100px" titleMargin="48px">
      <CardGrid>
        {values.map((value, index) => (
          <ValueCard
            key={index}
            title={value.title}
            description={value.description}
            icon={value.icon}
          />
        ))}
      </CardGrid>
    </ContentSection>
  );
};
