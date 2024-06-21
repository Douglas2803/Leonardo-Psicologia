import { NavLink } from '../nav-link';

const navList = [
  {
    text: 'Sobre',
    link: '/sobre',
  },
  {
    text: 'Blog',
    link: '/blog',
  },
];

const NavList = () => {
  return (
    <ul className="flex gap-2">
      {navList.map(({ text, link }) => {
        return (
          <li key={text}>
            <NavLink className="hover:underline" href={link}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export { NavList };
