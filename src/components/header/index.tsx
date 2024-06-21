import { ContactList } from './components/contact-list';
import { Logo } from './components/logo';
import { NavList } from './components/nav-list';

const Header = () => {
  return (
    <header className="container h-14 lg:text-2xl">
      <nav className="w-full h-full flex justify-between items-center">
        <Logo />

        <NavList />

        <ContactList />
      </nav>
    </header>
  );
};

export { Header };
