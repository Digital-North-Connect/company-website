interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  className = ''
}) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800
        rounded-xl shadow-lg
        p-6
        ${hover ? 'transition-all duration-200 hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
