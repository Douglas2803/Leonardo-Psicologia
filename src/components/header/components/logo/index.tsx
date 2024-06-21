import { NavLink } from '../nav-link';

const Logo = () => {
  return (
    <NavLink className="flex gap-1 bg-black p-2" href="/">
      <img src="/images/logo/brasao.svg" alt="Leonardo" />
      <span className="text-white">LeoPsi Ltda</span>
    </NavLink>
  );
};

export { Logo };
