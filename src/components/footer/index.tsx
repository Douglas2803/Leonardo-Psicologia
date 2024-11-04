import { ContactList } from './contact-list';
import { NavList } from './nav-list';

const Footer = () => {
  return (
    <footer className="container">
      <div className="my-12">
        <ContactList />
      </div>
      <div className="border-t-2 mb-12 border-gray-600 lg:flex lg:flex-row-reverse lg:justify-between lg:mb-0">
        <NavList />
        <p className=" text-center pt-6">@ 2023 Relume. All rights reserved</p>
      </div>
    </footer>
  );
};

export { Footer };
