import { ComponentProps, ReactNode } from 'react';

interface NavLinkProps extends ComponentProps<'a'> {
  children: ReactNode;
}

const NavLink = (props: NavLinkProps) => {
  const { children } = props;

  return <a {...props}>{children}</a>;
};

export { NavLink };
