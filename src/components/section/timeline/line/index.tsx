import { ReactNode } from 'react';

interface LineProps {
  children: ReactNode;
  className: string;
}

const Line = ({ children, className }: LineProps) => {
  return <div className={`${className}`}>{children}</div>;
};

export { Line };
