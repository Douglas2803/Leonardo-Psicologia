import { NavLink } from '../nav-link';

const navList = [
  {
    text: 'Politica de Privacidade',
    link: 'politica-de-privacidade',
  },
  {
    text: 'Termos de Serviços',
    link: 'termos-de-serviço',
  },
  {
    text: 'Cookies e Configuração',
    link: 'cookies-e-configurações',
  },
];

const NavList = () => {
  return (
    <ul className="underline flex flex-col text-center gap-y-4 mb-8 mt-6 mx-5 lg:flex-row lg:gap-x-6">
      {navList.map(({ text, link }) => {
        return (
          <li key={text}>
            <NavLink href={link}>{text}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export { NavList };
