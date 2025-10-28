interface SectionProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  gradient = false,
  id
}) => {
  return (
    <section
      id={id}
      className={`
        py-16 md:py-20
        ${gradient ? 'bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800' : ''}
        ${className}
      `}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
