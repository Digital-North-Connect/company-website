interface TextSectionProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
}

export const TextSection: React.FC<TextSectionProps> = ({
  children,
  color = '#475569',
  fontSize = '17px',
  lineHeight = '1.8'
}) => {
  return (
    <div style={{ color, fontSize, lineHeight }}>
      {children}
    </div>
  );
};
