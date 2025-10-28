interface ValueCardProps {
  title: string;
  description: string;
  icon?: string;
  variant?: 'default' | 'horizontal';
  padding?: string;
  iconSize?: string;
  titleSize?: string;
  titleColor?: string;
  descriptionSize?: string;
  descriptionColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  borderRadius?: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  icon,
  variant = 'default',
  padding,
  iconSize,
  titleSize,
  titleColor = '#111827',
  descriptionSize,
  descriptionColor = '#64748b',
  backgroundColor = '#f8fafc',
  borderColor = '#e2e8f0',
  hoverBorderColor = '#10b981',
  borderRadius = '12px'
}) => {
  const defaultPadding = variant === 'horizontal' ? '24px' : '28px';
  const defaultIconSize = variant === 'horizontal' ? '32px' : '36px';
  const defaultTitleSize = variant === 'horizontal' ? '18px' : '20px';
  const defaultDescriptionSize = variant === 'horizontal' ? '15px' : '15px';
  const lineHeight = variant === 'horizontal' ? '1.6' : '1.7';

  if (variant === 'horizontal') {
    return (
      <div
        style={{
          display: 'flex',
          gap: '20px',
          padding: padding || defaultPadding,
          borderRadius,
          backgroundColor,
          border: `1px solid ${borderColor}`,
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.borderColor = hoverBorderColor;
          e.currentTarget.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.08), 0 10px 25px -5px rgb(0 0 0 / 0.1)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = backgroundColor;
          e.currentTarget.style.borderColor = borderColor;
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {icon && <div style={{ fontSize: iconSize || defaultIconSize, flexShrink: 0, lineHeight: 1 }}>{icon}</div>}
        <div>
          <h3 style={{ fontSize: titleSize || defaultTitleSize, fontWeight: '600', marginBottom: '8px', color: titleColor }}>
            {title}
          </h3>
          <p style={{ color: descriptionColor, lineHeight, fontSize: descriptionSize || defaultDescriptionSize }}>
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: padding || defaultPadding,
        borderRadius,
        backgroundColor,
        border: `1px solid ${borderColor}`,
        transition: 'all 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.style.borderColor = hoverBorderColor;
        e.currentTarget.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.08), 0 10px 25px -5px rgb(0 0 0 / 0.1)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
        e.currentTarget.style.borderColor = borderColor;
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {icon && <div style={{ fontSize: iconSize || defaultIconSize, marginBottom: '16px' }}>{icon}</div>}
      <h3 style={{ fontSize: titleSize || defaultTitleSize, fontWeight: '600', marginBottom: '12px', color: titleColor }}>
        {title}
      </h3>
      <p style={{ color: descriptionColor, lineHeight, fontSize: descriptionSize || defaultDescriptionSize }}>
        {description}
      </p>
    </div>
  );
};
