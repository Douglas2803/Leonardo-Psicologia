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
      <ul className="w-full flex justify-center gap-x-1 h-6">
        {contactList.map(({ name, image, url, altText }) => {
          return (
            <li key={name} className="h-6 w-6">
              <NavLink href={url}>
                <img src={image} alt={altText} className="h-full w-full" />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { ContactList };
