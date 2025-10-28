interface CardGridProps {
  children: React.ReactNode;
  minCardWidth?: string;
  gap?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({
  children,
  minCardWidth = '300px',
  gap = '32px'
}) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${minCardWidth}, 1fr))`,
      gap
    }}>
      {children}
    </div>
  );
};
