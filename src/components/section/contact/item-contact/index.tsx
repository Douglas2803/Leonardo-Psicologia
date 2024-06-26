interface ItemContactProps {
  src: string;
  alt: string;
  title: string;
  text: string;
  link: string;
  textLink: string;
}

const ItemContact: React.FC<ItemContactProps> = ({ src, alt, title, text, link, textLink }) => {
  return (
    <>
      <div className="flex flex-col gap-y-3 text-center">
        <img className="h-7" src={src} alt={alt} />
        <p className="font-bold">{title}</p>
        <p>{text}</p>
        <a href={link} className="underline">
          {textLink}
        </a>
      </div>
    </>
  );
};

export { ItemContact };
