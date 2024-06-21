import { NavLink } from '../nav-link';

const contactList = [
  {
    name: 'Whatsapp icon',
    image: '/images/icons/whatsapp.svg',
    url: '',
    altText: 'Imagem/ícone de whatsapp',
  },
  {
    name: 'Instagram icon',
    image: '/images/icons/instagram.svg',
    url: '',
    altText: 'Imagem/ícone de instagram',
  },
];

const ContactList = () => {
  return (
    <>
      <ul className="hidden sm:flex gap-2 sm:gap-2 items-center">
        <li className="mr-5 lg:mr-10">
          <NavLink href="">(54) 9 8888-4444</NavLink>
        </li>

        {contactList.map(({ name, image, url, altText }) => {
          return (
            <li className="w-6 h-6 lg:w-10 lg:h-10" key={name}>
              <NavLink href={url}>
                <img className="h-full w-full" src={image} alt={altText} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { ContactList };
