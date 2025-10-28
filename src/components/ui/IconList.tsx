interface IconListProps {
  items: string[];
  iconColor?: string;
  iconSize?: string;
  textColor?: string;
  textSize?: string;
  lineHeight?: string;
  itemSpacing?: string;
  iconMarginRight?: string;
}

export const IconList: React.FC<IconListProps> = ({
  items,
  iconColor = '#10b981',
  iconSize = '20px',
  textColor = '#475569',
  textSize = '17px',
  lineHeight = '1.8',
  itemSpacing = '12px',
  iconMarginRight = '12px'
}) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((item, index) => (
        <li key={index} style={{
          display: 'flex',
          alignItems: 'start',
          marginBottom: itemSpacing,
          paddingLeft: '8px'
        }}>
          <svg style={{
            width: iconSize,
            height: iconSize,
            color: iconColor,
            marginRight: iconMarginRight,
            marginTop: '2px',
            flexShrink: 0
          }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span style={{ color: textColor, fontSize: textSize, lineHeight }}>{item}</span>
        </li>
      ))}
    </ul>
  );
};
