interface ContentSectionProps {
  title?: string;
  backgroundColor?: string;
  maxWidth?: string;
  paddingTop?: string;
  paddingBottom?: string;
  titleSize?: string;
  titleColor?: string;
  titleAlign?: 'left' | 'center' | 'right';
  titleMargin?: string;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  backgroundColor = 'white',
  maxWidth = '900px',
  paddingTop = '80px',
  paddingBottom = '80px',
  titleSize = '36px',
  titleColor = '#0f172a',
  titleAlign = 'center',
  titleMargin = '24px',
  children
}) => {
  return (
    <section style={{ paddingTop, paddingBottom, backgroundColor }}>
      <div style={{ maxWidth, margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        {title && (
          <h2 style={{
            fontSize: titleSize,
            fontWeight: '700',
            color: titleColor,
            marginBottom: titleMargin,
            textAlign: titleAlign
          }}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
